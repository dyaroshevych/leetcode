class Solution:
    def simplifyPath(self, path: str) -> str:
        folders = []
        new_folder = ''

        path += '/'

        for char in path:
            if char == '/':
                if new_folder == '..':
                    if folders:
                        folders.pop()
                elif new_folder not in ('', '.'):
                    folders.append(new_folder)

                new_folder = ''
                continue

            new_folder += char

        if not folders:
            return '/'

        return '/' + '/'.join(folders)
