'''
1. Understand
Use a Trie to identify words
Iterate board and DFS from each cell using the root of the Trie to find words.

2. Diagram
3. Pseudocode
4. Code
5. Big O
'''

class Trie:
    def __init__(self):
        self.children, self.isWord = {}, False
    def addWord(self, word):
        cur = self
        for c in word:
            if c not in cur.children: cur.children[c] = Trie()
            cur = cur.children[c]
        cur.isWord = True
    def prune(self, word):
        curr, stack = self, []
        for ch in word: stack.append(curr); curr = curr.children[ch]
        curr.isWord = False
        for n, ch in reversed(list(zip(stack, word))):
            if len(n.children[ch].children) > 0: return
            del n.children[ch]
class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        root = Trie()
        for w in words: root.addWord(w)
        m, n, res, seen = len(board), len(board[0]), [], set()
        def dfs(r, c, node, word):
            out = not (0 <= r < m and 0 <= c < n)
            if out: return
            char = board[r][c]
            if char not in node.children or (r, c) in seen: return
            seen.add((r, c))
            node = node.children[char]
            word += char
            if node.isWord: res.append(word); root.prune(word)
            for dr, dc in [r+1,c],[r-1,c],[r,c+1],[r,c-1]: dfs(dr, dc, node, word) 
            seen.remove((r, c))
        for r in range(m):
            for c in range(n):
                dfs(r, c, root, "")
        return res
