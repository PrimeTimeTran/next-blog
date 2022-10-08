def isPowerOfThree(n: int) -> bool:
  if n <= 0:
    return False

  while n % 3 == 0:
    print(n)
    n = n / 3

  print(n)
  return True if n == 1 else False


print(isPowerOfThree(27))