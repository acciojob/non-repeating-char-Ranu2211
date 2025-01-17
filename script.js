function firstNonRepeatedChar(str) {
 // Write your code here
	for(const char of str){
		if(str.indexOf(char) === str.lastIndexOf(char)){
		  return char;
		}
	}
return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
