from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # Check rows and columns
        for idx in range(9):
            if self.validate_row(board, idx) and self.validate_column(board, idx):
                continue

            return False

        # Check 3x3 boxes
        for row_idx in range(3):
            for col_idx in range(3):
                if self.validate_box(board, row_idx, col_idx):
                    continue

                return False

        return True

    def validate_row(self, board: List[List[str]], row: int) -> bool:
        seen = set()

        for symbol in board[row]:
            if symbol in seen:
                return False

            if symbol != '.':
                seen.add(symbol)

        return True

    def validate_column(self, board: List[List[str]], col: int) -> bool:
        seen = set()

        for row, _ in enumerate(board):
            symbol = board[row][col]

            if symbol in seen:
                return False

            if symbol != '.':
                seen.add(symbol)

        return True

    def validate_box(self, board: List[List[str]], row: int, col: int) -> bool:
        seen = set()

        for row_shift in range(3):
            for col_shift in range(3):
                symbol = board[row * 3 + row_shift][col * 3 + col_shift]

                if symbol in seen:
                    return False

                if symbol != '.':
                    seen.add(symbol)

        return True
