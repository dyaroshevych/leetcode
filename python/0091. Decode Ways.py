class Solution:
    def numDecodings(self, s: str) -> int:
        if s[0] == '0':
            return 0

        prev = 1
        curr = 1

        for idx in range(1, len(s)):
            if s[idx] == '0':
                if s[idx - 1] not in ('1', '2'):
                    return 0

                prev, curr = curr, prev
            elif s[idx - 1] == '1' or (s[idx - 1] == '2' and s[idx] <= '6'):
                prev, curr = curr, prev + curr
            else:
                prev = curr

        return curr
