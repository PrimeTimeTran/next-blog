def is_all_ones_decimal(n: int) -> bool:
    if n <= 0:
        return False
    return all(c == '1' for c in str(n))
