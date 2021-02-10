const input=document.querySelector('#input');
const output=document.querySelector('#output');
const button=document.querySelector('#generate-button');
const resetButton=document.querySelector('#reset-button');

resetButton.addEventListener('click',()=>{
  input.value="";
  output.value="";
  });
button.addEventListener('click',()=>{
  output.value=CryptoJS.MD5(input.value);
  
});
