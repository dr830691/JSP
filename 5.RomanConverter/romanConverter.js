
const output =document.querySelector("#output");
const input_number =document.querySelector("#input_number");
const heading =document.querySelector("#heading");
const container =document.querySelector(".container");
container.style.background="black";
container.style.color="white";
container.style.padding="100px";
container.style.marginTop="20px"

console.log(input_number.value);
const nums=input_number.value;
function romanConverter(nums)
{ let new_number=nums;
    const Symbols ={
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1,
    }
 let ans="";
 for(let i of Object.keys(Symbols))
 {
     const q=Math.floor(nums/Symbols[i]);
     nums= nums -(q*Symbols[i]);
     ans+=i.repeat(q);
 }
 console.log("Number is converted!")
output.style.color="green";
output.style.border="5px solid green";
output.style.display="flex";
output.style.justifyContent="center";
if(new_number=="")
output.innerHTML="Please Enter a Number";
else
output.innerHTML=`Roman Value of ${new_number} =  ${ans}`;

 

}
// console.log(romanConverter(0));
