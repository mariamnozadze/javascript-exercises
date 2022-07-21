function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);
//abcabcabc

//second way
function repeatStringNumTimes(string, times) {
  if (times < 0) return "";
  if (times === 1) return string;
  else return string + repeatStringNumTimes(string, times - 1);
}
repeatStringNumTimes("abc", 3);

//third way
function repeatStringNumTimes(string, times) {
  if (times > 0) return string.repeat(times);
  else return "";
}
repeatStringNumTimes("abc", 3);
