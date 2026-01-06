# 1
def neighbors(r, c, R, C):
    for dr, dc in [(r+1, c), (r-1, c), (r, c+1), (r, c-1)]:
        if 0 <= dr < R and 0 <= dc < C:
            yield dr, dc

# 2
def neighbors(r, c, R, C, directions=[(1,0),(-1,0),(0,1),(0,-1)]):
    return ((r+dr, c+dc) for dr, dc in directions if 0 <= r+dr < R and 0 <= c+dc < C)
