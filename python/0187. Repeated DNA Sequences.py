from typing import List


class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        sequences = {}
        repeated_sequences = []

        for start_index in range(len(s) - 9):
            curr_str = s[start_index:start_index + 10]

            if curr_str not in sequences:
                sequences[curr_str] = 0

            if sequences[curr_str] == 1:
                repeated_sequences.append(curr_str)

            sequences[curr_str] += 1

        return repeated_sequences
