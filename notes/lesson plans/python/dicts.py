meal = {}

print(meal)

meal = {
  'name': 'pizza'
}

print(meal)

meal['icon'] = '🍕'
print(meal)
meal['icon'] = '😋'

print(meal)
print(meal.keys())
print(meal.values())
print(meal.items())


if meal['name'] == 'pizza':
  print('Italian')

# if meal['size'] == 'large':
#   print('hungry')

if 'size' in meal:
  print('hungry')

meal.pop('icon')
print(meal)