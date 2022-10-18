mat = [[1, 2, 3], [4, 5, 6]]

a = []
for row in mat:
    for v in row:
        a.append(v)

print(a)
print(list(v for row in mat for v in row))
