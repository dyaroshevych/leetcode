from typing import Dict


class Solution:
    def closeStrings(self, word_1: str, word_2: str) -> bool:
        if len(word_1) != len(word_2):
            return False

        if set(word_1).symmetric_difference(set(word_2)):
            return False

        counts_1 = self.count_letters(word_1).values()
        counts_2 = self.count_letters(word_2).values()

        # Check if counts are same
        return not set(counts_1).symmetric_difference(set(counts_2))

    def count_letters(self, word: str) -> Dict[str, int]:
        letters = {}

        for letter in word:
            if letter in letters:
                letters[letter] += 1
            else:
                letters[letter] = 1

        return letters
