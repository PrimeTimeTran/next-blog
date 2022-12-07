wizards = ['Harry', 'Ron', 'Hermione']

for w in wizards:
  print(w)

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



