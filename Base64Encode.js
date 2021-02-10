const input=document.querySelector('#input');
const output=document.querySelector('#output');
const button=document.querySelector('#encode-button');
const resetButton=document.querySelector('#reset-button');
button.addEventListener('click',()=>{
output.value=window.btoa(input.value);
});

resetButton.addEventListener('click',()=>{
  input.value="";
  output.value="";
  });


