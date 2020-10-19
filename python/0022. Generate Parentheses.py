from typing import List


class Solution:
    def generateParenthesis(self, max: int) -> List[str]:
        parentheses = []

        self.generate(parentheses, '', 0, 0, max)

        return parentheses

    def generate(self, parentheses: List[str], curr: str, num_open: int, num_closed: int, max: int) -> None:
        if num_closed == max:
            parentheses.append(curr)

        if num_open < max:
            self.generate(parentheses, curr +
                          '(', num_open + 1, num_closed, max)

        if num_closed < num_open:
            self.generate(parentheses, curr + ')',
                          num_open, num_closed + 1, max)
