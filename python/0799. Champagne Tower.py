class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        tower = [[poured]]

        for i in range(query_row + 1):
            # add the next row
            tower.append([0] * (i + 2))

            # count for the first glass in a row
            tower[-1][0] = max((tower[-2][0] - 1) / 2, 0)
            tower[-1][-1] = max((tower[-2][-1] - 1) / 2, 0)

            # traverse through all glasses in a row except for the first one
            for i in range(1, len(tower[-1]) - 1):
                tower[-1][i] = max((tower[-2][i - 1] - 1) / 2,
                                   0) + max((tower[-2][i] - 1) / 2, 0)

        return min(tower[query_row][query_glass], 1)
