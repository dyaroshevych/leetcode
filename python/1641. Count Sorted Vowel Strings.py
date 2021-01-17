class Solution:
    def countVowelStrings(self, n: int) -> int:
        prev = {'e': 1, 'i': 1, 'o': 1, 'u': 1}

        for _ in range(1, n):
            prev['u'] += 1 + prev['e'] + prev['i'] + prev['o']
            prev['o'] += 1 + prev['e'] + prev['i']
            prev['i'] += 1 + prev['e']
            prev['e'] += 1

        return 1 + prev['e'] + prev['i'] + prev['o'] + prev['u']
