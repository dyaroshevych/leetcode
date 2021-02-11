class Solution:
    def isAnagram(self, str_1: str, str_2: str) -> bool:
        if len(str_1) != len(str_2):
            return False

        chars = {}

        for idx, _ in enumerate(str_1):
            if str_1[idx] not in chars:
                chars[str_1[idx]] = 0

            chars[str_1[idx]] += 1

            if str_2[idx] not in chars:
                chars[str_2[idx]] = 0

            chars[str_2[idx]] -= 1

        for val in chars.values():
            if val != 0:
                return False

        return True
