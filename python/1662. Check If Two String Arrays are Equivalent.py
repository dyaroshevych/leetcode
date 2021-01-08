from typing import List


class Solution:
    def arrayStringsAreEqual(self, word_1: List[str], word_2: List[str]) -> bool:
        idx_1 = word_idx_1 = idx_2 = word_idx_2 = 0

        while idx_1 < len(word_1) and idx_2 < len(word_2):
            if word_idx_1 == len(word_1[idx_1]):
                idx_1 += 1
                word_idx_1 = 0

            if word_idx_2 == len(word_2[idx_2]):
                idx_2 += 1
                word_idx_2 = 0

            if idx_1 == len(word_1) and idx_2 == len(word_2):
                return True

            if idx_1 == len(word_1) or idx_2 == len(word_2):
                return False

            char_1 = word_1[idx_1][word_idx_1]
            char_2 = word_2[idx_2][word_idx_2]

            if char_1 != char_2:
                return False

            word_idx_1 += 1
            word_idx_2 += 1

        return idx_1 == len(word_1) and idx_2 == len(word_2)
