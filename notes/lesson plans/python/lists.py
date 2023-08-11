wizards = ['Harry', 'Ron', 'Draco', 'Albus']
print(wizards)
print(wizards[0])
print(wizards[1])
print(wizards[-1])
print(wizards[-2])
wizards.append('Hermione')
print(wizards)
print(wizards[-1])

wizards.pop()
print(wizards)
print(wizards[-1])

wizards.remove('Ron')
print(wizards)
print(wizards.count('Ron'))

wizards.insert(0, 'Hagrid')
print(wizards)
print(wizards.count('Hagrid'))

wizards.insert(100, 'Severus')
print(wizards)

wizards.sort()
print(wizards)
print(wizards[::-1])
print(wizards)
wizards.sort(reverse=True)
print(wizards)
wizards.reverse()
print(wizards)
