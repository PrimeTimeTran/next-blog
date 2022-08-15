---
title: 'What is the decorator design pattern?'
date: '2017-12-31'
tags: ['Design Patterns']
draft: false
summary: 'What is the decorator design pattern?'
---

## Decorator Design Pattern

The decorator pattern is used to wrap objects and give them additional functionality.

This is useful when a resource becomes bloated and unwieldy due to all the other requirements our resources have to implement.

In Ruby & Rails we can use [Draper](https://github.com/drapergem/draper)

Imagine for example, a User resource in a Ruby on Rails application

```ruby
 # frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint(8)        not null, primary key
#  email                  :string
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  first_name             :string
#  last_name              :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  city                   :string
#  country                :string
#  occupation             :string
#  description            :text
#  age                    :integer
#  phone_number           :string
#  gender                 :integer
#

class User < ApplicationRecord
  validates :email, presence: true, format: { with: /\A.+@.+$\Z/ }, uniqueness: true, unless: ->(user) {
    user.social_signon != nil
  }
  attr_accessor :skip_password_validation  # virtual attribute to skip password validation while saving

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :uploads, as: :uploadable, dependent: :destroy
  has_one :first_upload, -> { limit(1).order('created_at ASC') },
          class_name: 'Upload'

  has_many :user_conversations, dependent: :destroy
  has_many :conversations, through: :user_conversations
  has_many :stages, through: :conversations
  has_many :messages, dependent: :destroy

  has_many :stage_conversations, -> { where('conversations.stage_id IS NOT NULL') }, through: :user_conversations, source: :conversation
  has_many :private_conversations, -> { where('conversations.stage_id IS NULL') }, through: :user_conversations, source: :conversation

  has_many :posts, dependent: :destroy
  has_many :reactions, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships

  has_many :blocks, class_name: 'Block', foreign_key: :user_id, dependent: :destroy
  has_many :blockees, through: :blocks, source: :blockee

  has_many :blocker_blocks, class_name: 'Block', foreign_key: :blockee_id, dependent: :destroy
  has_many :blockers, through: :blocker_blocks, source: :blocker

  has_many :sent_gifts, foreign_key: 'sender_id', class_name: 'VirtualGift'
  has_many :received_gifts, foreign_key: 'receiver_id', class_name: 'VirtualGift'

  has_many :user_reports
  has_many :notifications, foreign_key: :recipient_id

  has_many :customer_orders, class_name: 'Order', foreign_key: :customer_id, dependent: :destroy
  has_many :working_orders, class_name: 'Order', foreign_key: :employee_id, dependent: :destroy

  enum gender: {
    male: 0,
    female: 1
  }

  def full_name
    [
      first_name,
      last_name
    ].compact.join(' ')
  end

  def block(user_id)
    BlockBuilder.new(id, user_id)
  end

  def unblock(user_id)
    blocks.where(blockee_id: user_id).first&.destroy
    if (conversation = private_conversations
       .collect(&:user_conversations)
       .flatten.find { |uc| uc.user_id == user_id }
                        &.conversation)
      conversation.conversation_type = nil
    end
    true
  end

  def report(params)
    user_reports.create(params)
  end

  # OPTIMIZE Find a users existing conversation with another user more efficiently
  def find_existing_conversation(id)
    conversation_id =
      private_conversations
      .collect(&:user_conversations)
      .flatten
      .find { |uc| uc.user_id == id }
      &.conversation_id
    {
      conversation_id: conversation_id,
      other_user_name: other_user(id).first_name
    }
  end

  def other_user(id)
    User.find(id)
  end

  def blocked_users_ids
    (blocker_ids + blockee_ids).uniq
  end


  protected

  def password_required?
    return false if skip_password_validation
    super
  end

  class << self
    def search(search)
      terms = search.split(' ')
      location = where('city ILIKE :search OR ward ILIKE :search', search: "%#{terms[0]}%")
      location.uniq
    end
  end
end

```

Comments, relationships, and instance & class methods accounted for, our class becomes large and difficult to maintain.

The decorator design pattern is usually used to help us to extract out logic related generating views, hence the name, `decorator`.

After adding the gem to our `Gemfile` and bundling we'll see the Draper creates a new file where we can extract out the presentation logic of our resources(as opposed to business logic).

```ruby
# app/decorators/user.rb
class UserDecorator < Draper::Decorator
  delegate_all

  # Code
end
```

After that, we'd just need to call `.decorate` in our controllers before sending the resources to the view layer.

```ruby
# app/controllers/users_controller.rb
def index
  @users = User.all
end

# becomes

def index
  @users = User.all.decorate
end
```

### Recap

The Decorator Design Pattern does the following

- Extracts conditional logic out of the front end

- Extracts presentation logic out of [Active Record](https://guides.rubyonrails.org/active_record_basics.html) models.

- Reduces the need to for helper methods which pollute the global namespace.

This is an update of a post I made [years ago](https://medium.com/@loivtran/how-do-i-rails-use-the-decorator-design-pattern-in-ruby-programming-to-make-life-easier-536e8fe14546).
