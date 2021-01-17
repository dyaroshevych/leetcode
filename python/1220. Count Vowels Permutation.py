MOD = 10 ** 9 + 7


class Solution:
    def countVowelPermutation(self, n: int) -> int:
        prev = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1}

        for _ in range(1, n):
            curr = {}

            curr['a'] = (prev['e'] + prev['i'] + prev['u']) % MOD
            curr['e'] = (prev['a'] + prev['i']) % MOD
            curr['i'] = (prev['e'] + prev['o']) % MOD
            curr['o'] = prev['i']
            curr['u'] = (prev['i'] + prev['o']) % MOD

            prev = curr

        return (prev['a'] + prev['e'] + prev['i'] + prev['o'] + prev['u']) % MOD
