'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
'''
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        seen, q, R, C = set(), [[sr, sc]], len(image), len(image[0])
        while q:
            r, c = heappop(q)
            tmp = image[r][c]
            image[r][c] = color
            for dr, dc in [[r+1,c], [r-1,c], [r,c+1], [r,c-1]]:
                if (dr,dc) in seen: continue
                seen.add((dr,dc))
                inbounds = 0 <= dr < R and 0 <= dc < C
                if inbounds and image[dr][dc] == tmp:
                    heappush(q, [dr,dc])
        return image
'''
1. Understand
2. Diagram
3. Pseudocode
4. Code
5. BigO
Time:   O()
Space:  O()
'''
