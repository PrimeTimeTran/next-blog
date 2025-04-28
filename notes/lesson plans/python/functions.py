print("Hello World")


def greet():
    print("Hi")


greet

greet()

greet()
greet()
greet()


def greetWorld():
    print("Hi World")


greetWorld()


def greetGlobe():
    print("Hi Globe")


greetGlobe()


def greeter(greetee):
    print("Hi " + greetee)


greeter("🌎")
greeter("🌜")
# greeter()


def add(a, b):
    print(a + b)


add(0, 1)


def add(a, b, c):
    print(a + b + c)


add(1, 2, 3)
# add(1, 2)


def subtract(a, b=1):
    print(a - b)


subtract(10)
subtract(100, 5)


def addAll(*nums):
    print(sum(nums))


addAll(10)
addAll(10, 10)
addAll(10, 10, 10)


def kArguments(**args):
    print(args["knowledge"])


kArguments(language="python", knowledge="power")

value = addAll(1, 1)
print(value)


def addAndReturn(a, b):
    return a + b


value = addAndReturn(99, 1)
print(value)


def returnOdds(n):
    if not n % 2 == 0:
        return n


returnedValue = returnOdds(2)
print(returnedValue)
returnedValue = returnOdds(3)
print(returnedValue)
returnedValue = returnOdds(9)
print(returnedValue)


def recursive(n):
    if n < 0:
        return 0
    print(n)
    n = n - 1
    recursive(n)


recursive(5)
