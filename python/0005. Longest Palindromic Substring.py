class Solution:
    def longestPalindrome(self, s: str) -> str:
        max_palindrome = ''

        for idx, _ in enumerate(s):
            odd = self.get_palindrome(s, idx, idx)
            even = self.get_palindrome(s, idx, idx + 1)

            max_palindrome = max(max_palindrome, odd, even, key=len)

        return max_palindrome

    def get_palindrome(self, s: str, left: int, right: int) -> str:
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1

        return s[left + 1:right]
