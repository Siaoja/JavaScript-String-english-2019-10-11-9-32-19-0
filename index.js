// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var wordArray = sentence.toLowerCase().split(" ");
for(let i = 0; i < wordArray.length; i++){
    wordArray[i] = wordArray[i].replace(wordArray[i][0], wordArray[i][0].toUpperCase());
}
sentence = wordArray.join(" ");
console.log(sentence);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.substring(1);
console.log(money);