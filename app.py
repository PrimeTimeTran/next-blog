def hammingWeight(n: int) -> int:
  # return bin(n).count('1')
  
  res = 0
  
  while n:
    res += n % 2
    n = n >> 1
    
  return res



print(hammingWeight(100))