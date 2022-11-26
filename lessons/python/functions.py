def greet():
  print('Hello World')


greet()


def greetWorld():
  print('Hello World')


greetWorld()


def greetYouTube():
  print('Hello YouTube')


greetYouTube()

def greeter(entity):
  print('Hello ' + entity)


greeter('Students')
greeter('Class')


def add(a, b):
  print(a+b)


add(4, 1)


def addThree(a, b, c):
  print(a+b+c)


addThree(2, 2, 2)


def subtract(a, b=1):
  print(a-b)


subtract(10)
subtract(100, 5)


def addAll(*nums):
  print(sum(nums))


addAll(10)
addAll(10, 10)
addAll(10, 10, 10)


returnedValue = addAll(1, 1)
print(returnedValue)


def addAndReturn(a,b):
  return a+b


returnedValue = addAndReturn(99, 1)
print(returnedValue)

def returnOdds(n):
  if not n % 2 == 0:
    return n

returnedValue = returnOdds(2)
print(returnedValue)
returnedValue = returnOdds(3)
print(returnedValue)
returnedValue = returnOdds(9)
print(returnedValue)

# return
