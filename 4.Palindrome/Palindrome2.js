const input_string= document.querySelector("#input_string");
const check_button= document.querySelector("#check_button");
const Output= document.querySelector("#output");
const container =document.querySelector(".container");
container.style.background="black";
container.style.color="white";
container.style.padding="100px";
container.style.marginTop="20px"


// const str=input_string.value;
function checkPalindrome(str)
{ Output.innerHTML="See The OUTPUT here";
  console.log(str);
 let last=str.length -1;
  let first=0;
  let ans=true;
while(first<last)
{
    if(str[first]!=str[last])
    {   ans=false;
        break;
    }
    first++;
    last--;
         
}
if(ans){ 
Output.style.color="green";
Output.style.border="5px solid green";
Output.style.display="flex";
Output.style.justifyContent="center";
Output.innerHTML=`YES,[ ${str} ]is A Palindrome`;
}
else{
  Output.style.color="red";
  Output.style.border="5px solid red";
  Output.style.display="flex";
  Output.style.justifyContent="center";
  Output.innerHTML=`No, ${str}   is not A Palindrome`;
}

}
//   let str=input_string;
// console.log(typeof(str[0]));
// let upstr=str.toUpperCase();
// console.log(upstr);
// let newstring="";
// for(let i=0;i<upstr.length;i++)
// { // charAt (i) return the value of the character on ith place
//     // charCodeAt (i) return the ascii value of the character at ith index
// //    if((upstr.charCodeAt(i)>=65 && upstr.charCodeAt(i)<=90) ||(upstr.charCodeAt(i)>=48 && upstr.charCodeAt(i)<=57))
// if((upstr.charCodeAt(i)>="A".charCodeAt(0) && upstr.charCodeAt(i)<="Z".charCodeAt(0)) ||(upstr.charCodeAt(i)>="0".charCodeAt(0) && upstr.charCodeAt(i)<="9".charCodeAt(0)))
//        {newstring+=upstr.charAt(i);}
//        else
//        continue;
   
// }
// console.log(newstring);
// let first=0;

// let last=newstring.length-1;
// let ans=true;
// while(first<last)
// {
//     if(newstring.charAt(first)!=newstring.charAt(last))
//     {   ans=false;
//         break;
//     }
//     first++;
//     last--;
         
// }
// if(ans){
// Output.innnerHtml="YES,Given String is Palindrome";
// }
// else{
//   Output.innnerHtml="YES,Given String is Palindrome";
// }
