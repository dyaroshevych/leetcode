from typing import List


class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        remaining = []

        for asteroid in asteroids:
            if asteroid > 0:
                stack.append(asteroid)
                continue

            while len(stack) > 0:
                if stack[-1] > -asteroid:
                    asteroid = 0
                    break

                curr_asteroid = stack.pop()

                if curr_asteroid == -asteroid:
                    asteroid = 0
                    break

            if asteroid < 0:
                remaining.append(asteroid)

        remaining.extend(stack)

        return remaining
