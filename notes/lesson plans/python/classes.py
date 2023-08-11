class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Programmer(Person):
  pass

programmer = Programmer('Alan', 'Turing')
programmer.printname()

class Wizard(Person):
  def patronus(self):
    print("Expecto Patronus")

s1 = Wizard("Harry", "Potter")
s1.patronus()
