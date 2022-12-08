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

for c in "Alphabet":
  print(c)

for i, c in enumerate("Alphabet"):
  print(i, c)

for n in set([1, 2, 3]):
  print(n)

states = {
  "FL": "Florida",
  "CA": "California",
  "AK": "Alaska"
}

for s in states:
  print(s)

for s in states.values():
  print(s)

for s in states.items():
  print(s)

for k, v in states.items():
  print(k, v)

for i, [k,v] in enumerate(states.items()):
  print(i, k, v)
