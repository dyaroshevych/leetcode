class Solution:
    def decodeAtIndex(self, S: str, K: int) -> str:
        size = 0

        for char in S:
            if char.isalpha():
                size += 1
            else:
                size *= int(char)

        for char in reversed(S):
            K %= size

            if K == 0 and char.isalpha():
                return char

            if char.isalpha():
                size -= 1
            else:
                size /= int(char)
