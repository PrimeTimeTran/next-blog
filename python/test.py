from googletrans import Translator

translator = Translator()
line = "It is not events that disturb people, it is their judgements concerning them."
line = "You have power over your mind - not outside events. Realize this, and you will find strength."
r = translator.translate(line, src='en', dest='vi')

print(r)


