const output =document.querySelector("#output");
const input_number =document.querySelector("#input_number");
const heading =document.querySelector("#heading");
const container =document.querySelector(".container");
container.style.background="black";
container.style.color="white";
container.style.padding="100px";
container.style.marginTop="20px"



const shiftCipher=(str,key) =>{
    let ans = "";
    for(let i of str)
    { 
      if(i.charCodeAt(0)>="A".charCodeAt(0) && i.charCodeAt(0)<="Z".charCodeAt(0))
      {const charASCIIValue=(Number(i.charCodeAt(0)-"A".charCodeAt(0))+Number(key))%26;
       console.log(charASCIIValue,i);
      ans+= String.fromCharCode(charASCIIValue+"A".charCodeAt(0));
      }
      if(i.charCodeAt(0)>="a".charCodeAt(0) && i.charCodeAt(0)<="z".charCodeAt(0))
      {const charASCIIValue=(Number(i.charCodeAt(0)-"a".charCodeAt(0))+Number(key))%26;
       console.log(charASCIIValue,i);
      ans+= String.fromCharCode(charASCIIValue+"a".charCodeAt(0));
      }
      else
      ans+=i;
    }
      console.log("Number is converted!")
      output.style.color="green";
      output.style.border="5px solid green";
      output.style.display="flex";
      output.style.justifyContent="center";
      if(str=="")
      output.innerHTML="Please Enter a Message";
      else if(key=="")
      output.innerHTML="Please Enter a key";
      else
      output.innerHTML=`Shifted Cipher  of ${str} is  ${ans}`;
         
  }