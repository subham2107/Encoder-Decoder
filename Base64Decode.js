const input=document.querySelector('#input');
const output=document.querySelector('#output');


const decodeButton=document.querySelector('#decode-button');
const resetButton=document.querySelector('#reset-button');

decodeButton.addEventListener('click',()=>{
  output.value=window.atob(input.value);
});
resetButton.addEventListener('click',()=>{
  input.value="";
  output.value="";
  });