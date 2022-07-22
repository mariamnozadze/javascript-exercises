//does not give correct results when given unicode characters
function reverse(string) {
  let index = string.length - 1;
  let result = "";
  while (index > -1) {
    result += string[index];
    index--;
  }
  return result;
}

reverse("aabbcc");
//("ccbbaa");
