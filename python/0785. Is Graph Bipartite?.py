from typing import List
from collections import deque


class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        # 0 - not colored yet
        # -1 - first part
        # 1 - second part
        colors = [0] * len(graph)
        curr_color = -1

        visited = set()

        for node, _ in enumerate(graph):
            if node in visited:
                continue

            nodes = deque([node])

            while len(nodes):
                for _ in range(len(nodes)):
                    node = nodes.popleft()

                    if node in visited:
                        continue

                    visited.add(node)

                    colors[node] = curr_color

                    for neighbour in graph[node]:
                        if colors[neighbour] == curr_color:
                            return False

                        nodes.append(neighbour)

                curr_color = -curr_color

        return True
