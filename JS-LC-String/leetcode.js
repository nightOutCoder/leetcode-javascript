// 1365. How Many Numbers Are Smaller Than the Current Number

// TC- O(n2)
// SC - O(n)

var smallerNumbersThanCurrent = function (nums) {
  let resultArray = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] != nums[j]) {
        if (nums[i] > nums[j]) {
          count++;
        }
      }
    }
    resultArray.push(count);
  }
  return resultArray;
};
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

// TC- O(n long n)
// SC - O(n)
function smallerNumbersThanCurrent1(inputArray) {
  let sortedArray = [...inputArray].sort((a, b) => a - b);
  console.log(sortedArray);

  let mapResult = {};
  for (let i = 0; i < sortedArray.length; i++) {
    if (mapResult[sortedArray[i]] === undefined) {
      mapResult[sortedArray[i]] = i;
    }
  }
  console.log(mapResult);
  return inputArray.map((n) => mapResult[n]);
}

console.log(smallerNumbersThanCurrent1([8, 1, 2, 2, 3]));

console.log("==============================================================");
// 217. Contains Duplicate
var containsDuplicate = function (nums) {
  let isContainsDuplicate = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j && nums[i] == nums[j]) {
        isContainsDuplicate = true;
        break;
      }
    }
  }
  if (isContainsDuplicate) {
    return true;
  } else {
    return false;
  }
};
console.log(containsDuplicate([1, 2, 3, 4, 1]));

// 217. Contains Duplicate
var containsDuplicate1 = function (nums) {
  let resultMap = {};

  for (let element of nums) {
    if (resultMap[element]) {
      resultMap[element]++;
    } else {
      resultMap[element] = 1;
    }
  }

  for (let element in resultMap) {
    if (resultMap[element] >= 2) {
      console.log(resultMap[element], element);
    }
  }
  return resultMap;
};

console.log(containsDuplicate1([1, 2, 3, 4, 1]));

var containsDuplicate3 = function (nums) {
  let resultMap = {};

  for (let element of nums) {
    if (resultMap[element]) {
      resultMap[element]++;
      return true;
    } else {
      resultMap[element] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate3([1, 2, 3, 4]));

// 242. Valid Anagram
// SC - O(n)
// TC - O(n log n)
function isAnargam(s, t) {
  if (s.length != t.length) {
    return false;
  }
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
}
//console.log(isAnargam("dbce", "becd"));

// SC - O(k) (k = unique characters; O(1) if only lowercase letters). O(26) → considered O(1)
// TC - O(n)
function isAnargamViaMap(s, t) {
  let map = {};
  if (s.length != t.length) return false;

  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }
  for (let char of t) {
    if (!map[char]) {
      return false;
    }
    map[char] -= 1;
  }
  return true;
}
// console.log(isAnargamViaMap("acbd", "abcd"));
// console.log(isAnargamViaMap("abcd", "xbcd"));

// SC - O(1)
// TC - O(n)
function isAnargamViaArray(s, t) {
  if (s.length != t.length) return false;
  let result = new Array(26).fill(0);
  const base = "a".charCodeAt(0);
  for (let char of s) {
    let index = char.charCodeAt(0) - base;
    result[index] += 1;
  }
  for (let char of t) {
    let index = char.charCodeAt(0) - base;
    result[index] -= 1;
  }
  for (let value of result) {
    if (value != 0) {
      return false;
    }
  }
  return true;
}
console.log(isAnargamViaMap("acbd", "abcd"));
console.log(isAnargamViaMap("abcd", "xbcd"));

console.log("===========================================");

//1431. Kids With the Greatest Number of Candies

// var kidsWithCandies = function (candies, extraCandies) {
//   let result = [];
//   let maxElement = 0;
//   for (let i = 0; i < candies.length; i++) {
//     console.log(candies.length);
//     if (maxElement < candies[i]) {
//       maxElement = candies[i];
//     }
//   }
//   for (let i = 0; i < candies.length; i++) {
//     if (candies[i] + extraCandies >= maxElement) {
//       result.push(true);
//     } else {
//       result.push(false);
//     }
//   }
//   return result;
// };
// let candies = [4, 2, 1, 1, 2];
// let extraCandies = 1;
// kidsWithCandies(candies, extraCandies);

// var kidsWithCandies = function (candies, extraCandies) {
//   let result = [];
//   let maxElement = Math.max(...candies);
//   console.log(maxElement);

//   for (let i = 0; i < candies.length; i++) {
//     result.push(candies[i] + extraCandies >= maxElement);
//   }
//   return result;
// };
// let candies = [4, 2, 1, 1, 2];
// let extraCandies = 1;
// console.log(kidsWithCandies(candies, extraCandies));

var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let maxElement = Math.max(...candies);
  console.log(maxElement);

  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= maxElement);
  }
  return candies.map((data) => data + extraCandies >= maxElement);
};
let candies = [4, 2, 1, 1, 2];
let extraCandies = 1;
console.log(kidsWithCandies(candies, extraCandies));

//1662. Check If Two String Arrays are Equivalent

// var arrayStringsAreEqual = function (word1, word2) {
//   return word1.join("") === word2.join("");
// };
// console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
// console.log("------");
// console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));

// Time and Space complexity-Complexity: O(n + m) (
//
//
// var arrayStringsAreEqual = function (word1, word2) {
//   let s = "";
//   let t = "";
//   for (let i = 0; i < word1.length; i++) {
//     s = s + word1[i];
//   }
//   for (let i = 0; i < word2.length; i++) {
//     t = t + word2[i];
//   }
//   return s === t ? true : false;
// };
// //console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
// console.log("------");
// console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));

// var arrayStringsAreEqual = function (word1, word2) {
//   return word1.join("") === word2.join("");
// };
// console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
// console.log("------");
// console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));

console.log("===========================================");
var arrayStringsAreEqual = function (word1, word2) {
  let i = 0;
  let j = 0;
  let s = 0;
  let t = 0;

  while (i < word1.length && j < word2.length) {
    if (word1[i][s] != word2[j][t]) {
      return false;
    }

    s++;
    if (s == word1[i].length) {
      i++;
      s = 0;
    }
    t++;
    if (t == word2[j].length) {
      j++;
      t = 0;
    }
  }
  return i == word1.length && j == word2.length;
};
//console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log("------");
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
