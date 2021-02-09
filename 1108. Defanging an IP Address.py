class Solution:
    def defangIPaddr(self, address: str) -> str:
        defanged_address = ''

        for char in address:
            if char == '.':
                defanged_address += '[.]'
            else:
                defanged_address += char

        return defanged_address
