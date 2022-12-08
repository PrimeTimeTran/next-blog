wizards = ['Harry', 'Ron', 'Hermione']

for wizard in wizards:
  print(wizard)

for i, w in enumerate(wizards):
  print(i, w) 

for i in range(len(wizards)):
  w = wizards[i]
  print(i, w)

for i in range(1, len(wizards)):
  w = wizards[i]
  print(i, w)

for n in range(0, 10, 2):
  print(n)

while len(wizards) > 0:
  print(wizards)
  wizards.pop()

for c in "alphabet":
  print(c)

for i, c in enumerate("alphabet"):
  print(i, c)

for n in set([1, 2, 3]):
  print(n)

fruits = {
  "🍊": "orange",
  "🍎": "apple",
  "🍉": "watermelon",
}

for f in fruits:
  print(f)

for f in fruits.values():
  print(f)

for f in fruits.items():
  print(f)

for k, v in fruits.items():
  print(k, v)

for i, [k,v] in enumerate(fruits.items()):
  print(i, k, v)
