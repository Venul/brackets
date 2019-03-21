module.exports = function check(str, bracketsConfig) {
  var left = [];
  var right = [];
  var brackets = [];
  var leftSymb;
  var rightSymb;
  
  for (var i=0; i<bracketsConfig.length; i++) {
    left.push(bracketsConfig[i][0]);
    right.push(bracketsConfig[i][1]);
  }

  for (var j=0;j<str.length; j++) {
    leftSymb = left.indexOf(str[j]);
    rightSymb = right.indexOf(str[j]);
   if (leftSymb==rightSymb) {
    if (brackets.indexOf(leftSymb)<0) {
      brackets.push(leftSymb);
    } else {
      brackets.pop();
    }
   } else if (leftSymb>=0) {
      brackets.push(leftSymb);
      if (leftSymb==rightSymb) brackets.pop();     
    } else if (rightSymb>=0) {
      if (brackets.length < 0) return false;
      if (rightSymb == brackets[brackets.length - 1]) {
        brackets.pop();
      } else {
        return false;
      }
    }
  }

  return brackets.length !=0 ? false : true;
}
