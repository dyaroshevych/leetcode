# Below is the interface for Iterator, which is already defined for you.
#
# class Iterator:
#     def __init__(self, nums):
#         """
#         Initializes an iterator object to the beginning of a list.
#         :type nums: List[int]
#         """
#
#     def hasNext(self):
#         """
#         Returns true if the iteration has more elements.
#         :rtype: bool
#         """
#
#     def next(self):
#         """
#         Returns the next element in the iteration.
#         :rtype: int
#         """

class PeekingIterator:
    def __init__(self, iterator):
        """
        Initialize your data structure here.
        :type iterator: Iterator
        """
        self.iterator = iterator
        self.peeked = None

    def peek(self):
        """
        Returns the next element in the iteration without advancing the iterator.
        :rtype: int
        """
        if self.peeked is None:
            self.peeked = self.iterator.next()

        return self.peeked

    def next(self):
        """
        :rtype: int
        """
        if self.peeked is None:
            return self.iterator.next()

        elem = self.peeked
        self.peeked = None

        return elem

    def hasNext(self):
        """
        :rtype: bool
        """
        return self.peeked is not None or self.iterator.hasNext()
