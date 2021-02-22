from typing import List
from collections import deque


class Solution:
    def letterCasePermutation(self, S: str) -> List[str]:
        permutations = deque([''])

        for char in S:
            if char.isalpha():
                for _ in range(len(permutations)):
                    perm = permutations.popleft()

                    permutations.append(perm + char.lower())
                    permutations.append(perm + char.upper())
            else:
                for _ in range(len(permutations)):
                    perm = permutations.popleft()
                    permutations.append(perm + char)

        return list(permutations)
