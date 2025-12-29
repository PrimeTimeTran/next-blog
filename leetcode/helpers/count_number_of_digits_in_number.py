def count_number_of_digits_in_number(n, digit):
    n = abs(n)
    digit = str(digit)
    return str(n).count(digit)
