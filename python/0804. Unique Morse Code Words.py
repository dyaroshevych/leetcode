from typing import List

MORSE_CODE = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..",
              "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]


class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        codes = set()

        for word in words:
            codes.add(self.decode(word))
        print(codes)

        return len(codes)

    def decode(self, word: str) -> str:
        encoded_word = ''

        for char in word:
            encoded_word += MORSE_CODE[ord(char) - 97]

        return encoded_word
