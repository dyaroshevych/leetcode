from math import floor, sqrt
from typing import Set


class Solution:
    def winnerSquareGame(self, N: int) -> bool:
        losing_positions = set([0])

        for num_stones in range(2, N + 1):
            self.mark_winning_position(losing_positions, num_stones)

        return N not in losing_positions

    def mark_winning_position(self, losing_positions: Set[int], num_stones: int) -> None:
        max_turn_size = floor(sqrt(num_stones))

        for turn_size in range(1, max_turn_size + 1):
            if num_stones - turn_size ** 2 in losing_positions:
                return

        losing_positions.add(num_stones)
