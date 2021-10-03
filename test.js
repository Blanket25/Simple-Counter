function compareTwoStrs(str1, str2) {
    
    let commonPrefix = "";
    
        for(let i = 0; i < str1.length; i++) {
            if( str1.charAt(i) === str2.charAt(i)) {
                commonPrefix += str1.charAt(i)
            } else {
                break;
            }
        }
    return commonPrefix
}


function longestCommonPrefix(strings) {

    let commonPrefix = '';
   
    for(let i = 0; i < strings.length; i ++) {
        commonPrefix = compareTwoStrs(strings[0], strings[i])
    }
  return commonPrefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))