from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row = 0
        col = len(matrix[0]) - 1

        while row < len(matrix) and col >= 0:
            if target == matrix[row][col]:
                return True

            if target < matrix[row][col]:
                col -= 1
            else:
                row += 1

        return False
