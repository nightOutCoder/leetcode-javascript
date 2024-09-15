var lengthOfLastWord = function(s) {
    return s.trim().split(' ')[s.trim().split(' ').length-1].length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
