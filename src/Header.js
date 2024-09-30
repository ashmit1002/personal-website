// src/Header.js
import React, { useState } from 'react';
import profilePic from './assets/quickSelfie.jpg';
import Leetcode_Chunk from './LeetCode_Chunk';

const Header = () => {
  const leetcodeChallenges = [
    {
      title: "217. Contains Duplicate",
      problemLink: "https://leetcode.com/problems/contains-duplicate/",
      youtubeLink: "https://www.youtube.com/watch?v=example",
      code: `class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        prevSet = set()
        for i in nums:
            if i in prevSet:
                return True
            prevSet.add(i)
        return False`
    },
    {
      title: "242. Valid Anagram",
      problemLink: "https://leetcode.com/problems/valid-anagram/",
      youtubeLink: "https://www.youtube.com/watch?v=example",
      code: `class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        sMap = {}
        tMap = {}
        for i in range(len(s)):
            sMap[s[i]] = sMap.get(s[i], 0) + 1
            tMap[t[i]] = tMap.get(t[i], 0) + 1
        return sMap == tMap`
    },
    {
      title: "1. Two Sum",
      problemLink: "https://leetcode.com/problems/two-sum/",
      youtubeLink: "https://www.youtube.com/watch?v=example",
      code: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[nums[i]] = i`
    },
    {
      title: "49. Group Anagrams",
      problemLink: "https://leetcode.com/problems/group-anagrams/",
      youtubeLink: "https://www.youtube.com/watch?v=example",
      code: `class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashMap = defaultdict(list)
        for i in strs:
            sorted_word = "".join(sorted(i))
            hashMap[sorted_word].append(i)
        return list(hashMap.values())`
    },
    {
      title: "347. Top K Frequent Elements",
      problemLink: "https://leetcode.com/problems/top-k-frequent-elements/",
      youtubeLink: "https://www.youtube.com/watch?v=example",
      code: `class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counts = {}
        freq = [[] for i in range(len(nums) + 1)]
        for i in nums:
            counts[i] = counts.get(i, 0) + 1
        for v,c in counts.items():
            freq[c].append(v)
        
        result = []
        for i in range(len(freq) - 1, -1, -1):
            for j in freq[i]:
                result.append(j)
                if len(result) == k:
                    return result`
    },
    {
      title: "238. Product of Array Except Self",
      problemLink: "https://leetcode.com/problems/product-of-array-except-self/",
      youtubeLink: "https://www.youtube.com/watch?v=example",
      code: `class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = [1] * len(nums)
        for i in range(1, len(nums)):
            result[i] = result[i - 1] * nums[i - 1]
        postProduct = 1
        for i in range(len(nums) - 1, -1, -1):
            result[i] *= postProduct
            postProduct *= nums[i]
        return result`
    },
    {
      title: "36. Valid Sudoku",
      problemLink: "https://leetcode.com/problems/valid-sudoku/",
      youtubeLink: "https://www.youtube.com/watch?v=example",
      code: `class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set)
        columns = defaultdict(set)
        grid = defaultdict(set)
        for r in range(9):
            for c in range(9):
                if(board[r][c] == "."):
                    continue
                if(board[r][c] in rows[r] or board[r][c] in columns[c] or board[r][c] in grid[r//3, c//3]):
                    return False
                rows[r].add(board[r][c])
                columns[c].add(board[r][c])
                grid[(r//3), (c//3)].add(board[r][c])
        return True`
    },
    {
      title: "128. Longest Consecutive Sequence",
      problemLink: "https://leetcode.com/problems/longest-consecutive-sequence/",
      youtubeLink: "https://www.youtube.com/watch?v=example",
      code: `class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        longest = 0
        for n in nums:
            streak = 0
            if n - 1 not in numSet:
                streak += 1
                while n + streak in numSet:
                    streak += 1
                longest = max(longest, streak)
        return longest`
    },
    // Add more challenges as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const chunksPerPage = 5;

  // Calculate the index of the last chunk on the current page
  const indexOfLastChunk = currentPage * chunksPerPage;
  // Calculate the index of the first chunk on the current page
  const indexOfFirstChunk = indexOfLastChunk - chunksPerPage;
  // Get the current chunks
  const currentChunks = leetcodeChallenges.slice(indexOfFirstChunk, indexOfLastChunk);

  // Calculate total pages
  const totalPages = Math.ceil(leetcodeChallenges.length / chunksPerPage);

  return (
    <div className="relative bg-blue-900 text-white flex flex-col items-center justify-center py-16">
      <img
        src={profilePic}
        alt="Ashmit Shrivastava"
        className="w-48 h-48 rounded-full border-4 border-white shadow-lg mb-6 object-cover" // Circular styling
      />
      <div className="text-center">
        <h1 className="text-5xl font-bold">Ashmit Shrivastava</h1>
        <p className="text-2xl mt-4">Aspiring Quant & CS Student</p>
        <p className="text-xl mt-2">Exploring the intersection of Computer Science and Finance</p>
      </div>

      {/* Leetcode Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">LeetCode Challenges</h2>

        {/* Render current chunks */}
        {currentChunks.map((challenge, index) => (
          <Leetcode_Chunk
            key={index}
            title={challenge.title}
            problemLink={challenge.problemLink}
            youtubeLink={challenge.youtubeLink}
            code={challenge.code}
          />
        ))}

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Previous
          </button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
