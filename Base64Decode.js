const input=document.querySelector('#input');
const output=document.querySelector('#output');

const decodeButton=document.querySelector('#decode-button');

decodeButton.addEventListener('click',()=>{
  output.value=window.atob(input.value);
});