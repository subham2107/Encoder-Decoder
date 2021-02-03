const input=document.querySelector('#input');
const output=document.querySelector('#output');
const button=document.querySelector('#generate-button');
button.addEventListener('click',()=>{
  output.value=CryptoJS.MD5(input.value);
  
});
