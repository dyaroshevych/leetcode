from typing import List, Tuple
from collections import deque


class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if grid[0][0] == 1:
            return - 1

        cells = deque([(0, 0)])
        distance = 1

        while len(cells):
            for _ in range(len(cells)):
                row, col = cells.popleft()

                if len(grid) - 1 == row == col:
                    return distance

                for n_row, n_col in self.get_neighbours(row, col):
                    if (0 <= n_row < len(grid) and
                        0 <= n_col < len(grid) and
                        grid[n_row][n_col] == 0
                        ):
                        cells.append((n_row, n_col))
                        grid[n_row][n_col] = 1

            distance += 1

        return -1

    def get_neighbours(self, row: int, col: int) -> List[Tuple[int]]:
        neighbours = []

        for row_shift in range(-1, 2):
            for col_shift in range(-1, 2):
                if row_shift == 0 and col_shift == 0:
                    continue

                neighbours.append((row + row_shift, col + col_shift))

        return neighbours
