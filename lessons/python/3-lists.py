ws = ['Harry', 'Ron', 'Draco']

print(ws)

print(ws[0])
print(ws[1])

print(ws[2])

print(ws[-1])
print(ws[-2])

ws.append('Hermione')

print(ws)

print(ws[-1])

ws.insert(0, 'Hagrid')

print(ws)

ws.pop()

print(ws[-1])

ws.append('Draco')
print(ws.count('Draco'))

print(ws)

ws.sort()
print(ws)

print(ws.index('Draco'))

print('Draco'.index('r'))
