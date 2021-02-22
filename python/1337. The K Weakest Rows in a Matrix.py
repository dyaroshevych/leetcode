from typing import List


class Solution:
    def kWeakestRows(self, matrix: List[List[int]], num_weakest: int) -> List[int]:
        strengths = {}

        for idx, row in enumerate(matrix):
            curr = row.count(1)

            if curr not in strengths:
                strengths[curr] = []

            strengths[curr].append(idx)

        weakest_rows = []
        curr_strength = 0

        while len(weakest_rows) < num_weakest:
            while curr_strength not in strengths:
                curr_strength += 1

            if num_weakest - len(weakest_rows) < len(strengths[curr_strength]):
                weakest_rows += strengths[curr_strength][:num_weakest -
                                                         len(weakest_rows)]
                break

            weakest_rows += strengths[curr_strength]
            del strengths[curr_strength]

        return weakest_rows
