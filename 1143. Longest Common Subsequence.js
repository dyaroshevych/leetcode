const longestCommonSubsequence = (text1, text2) => {
  if (text1.length < text2.length)
    return longestCommonSubsequence(text2, text1);
  const dp = [new Array(text2.length).fill(0), new Array(text2.length).fill(0)];

  for (let i = 0; i < text1.length; i++)
    for (let j = 0; j < text2.length; j++)
      if (text1[i] === text2[j])
        dp[i % 2][j] = (j > 0 ? dp[Math.abs((i - 1) % 2)][j - 1] : 0) + 1;
      else
        dp[i % 2][j] = Math.max(
          j > 0 ? dp[i % 2][j - 1] : 0,
          dp[Math.abs((i - 1) % 2)][j]
        );

  return dp[Math.abs((text1.length - 1) % 2)][text2.length - 1];
};

console.log(longestCommonSubsequence("abcde", "ace"));
