from typing import List


class Solution:
    def findLongestWord(self, chars: str, dct: List[str]) -> str:
        longest_word = ''

        for word in dct:
            if self.is_subword(chars, word) and len(word) >= len(longest_word):
                if word < longest_word or len(word) > len(longest_word):
                    longest_word = word

        return longest_word

    def is_subword(self, chars: str, word: str) -> bool:
        word_idx = 0

        for char in chars:
            if char == word[word_idx]:
                word_idx += 1

                if word_idx == len(word):
                    return True

        return False
