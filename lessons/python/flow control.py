value = True

if value:
  print('✅')

if value:
  print('✅')
else:
  print('False')

if not value:
  print('✅')
else:
  print('False')

expression = 'spam'

if expression == True:
  print('✅')
elif expression == False:
  print('False')
else:
  print('Is kinda like ham 🐖')

print('0 < 10 is ✅') if 0 < 10 else print('0 < 10 is False')

result = print('0 < 10 is ✅ ') if 0 > 10 else '0 > 10 is 👎'
print(result)


if 1 > 0 and 10 > 0:
  print('✅')

if 1 > 0 and -10 > 0:
  print('✅')

if 1 > 0 or -10 > 0:
  print('✅')

if 1 == 1:
  print('✅')

one = 1

if one is 1:
  print('✅')

if 'a' in 'alphabet':
  print('✅')

if 'a' in ['a', 'b']:
  print('✅')

if 'z' not in 'alphabet':
  print('🤔')
else:
  print('🤯')

