// // let tld = "org Org com COM net Net"
// // let nums = "1234#$^&*!56789"
// // let numsre = /[0-2]/g;
// // let notnumsre = /[^0-2]/g;
// // let specialre = /[^0-9]/g;
// // //match
// // let pacticere = /os[0-9]os/g;
// // console.log(nums.match(numsre));
// // str = "12305006102"
// // pat = /[1-5][1-4]/g
// // console.log(str.match(pat))
// let mystring = "AaksfjhgakrlfhglkJLKhjlkjLKhjkHhgJHgj7658767576#^#$%^@#%@^HFKSDJFH654"
// let mystring2 = "AaBbCcdefG123%#^^^$@#^^(**%&$@#$%"
// // let atozsmall = /[a-z]/g;
// // let notatozsmall = /[^a-z]/g;
// // // console.log(mystring.match(atozsmall))
// // let aandbandcandd = /[ace]/g
// // let notaandbandcandd = /[ace]/g
// // console.log(mystring.match(notatozsmall))
// let spichalchar = /[^a-z0-9]/ig
// console.log(mystring2.match(spichalchar))
// (.) matches any thing except newline
// (\w) shortcut for [a-z0-9_]
// \W non word char
// \d [0-9]
// \D non digits
// \s whitespace
// \S none whitespace
// isNaN : 
// (\b ) : white space OR nothing
// | : or 
// ex or : rename = /\bspam|spam\b/ig begine or end
// regex.test(string)
// string.match(regex)
// + : one or more put after
// * : zero or more put after
// ? : zero or one put after
// (\) :  tell program this is a char escape problems
// () : to make a group
// {number} : the thing you put before repeted number of times 
// {number,} : the thing you put before repeted at least number of times 
// {number1,number2} : the thing you put before repeted number1 of times to number2 of times
// something$ : end with something
// (^something) : strts with something
// (?=something) : followed by something dont include something
// (?!something) : not followed by something dont include something
// string_name.replace("something","another thing")
// string_name.replaceAll("something","another thing")
// give the form id give it the onsubmit event :1- return false on not valid 2-return true go to submition

names = "spam spam123 23Spam"
rename = /\bspam|spam\b/ig
console.log(names.match(rename))