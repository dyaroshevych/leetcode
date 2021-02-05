from typing import List


class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        self.flip(matrix)
        self.symmetric(matrix)

    def flip(self, matrix: List[List[int]]) -> None:
        for row in range(len(matrix) // 2):
            matrix[row], matrix[len(
                matrix) - row - 1] = matrix[len(matrix) - row - 1], matrix[row]

    def symmetric(self, matrix: List[List[int]]) -> None:
        for row, _ in enumerate(matrix):
            for col in range(row, len(matrix)):
                matrix[row][col], matrix[col][row] = matrix[col][row], matrix[row][col]
