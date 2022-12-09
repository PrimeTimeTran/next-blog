class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)


class Student(Person):
  pass


s1 = Student("Harry", "Potter")
s1.printname()


class Student(Person):
  def patronus(self):
    print("expecto")


s1.patronis()