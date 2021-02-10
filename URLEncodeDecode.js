const input=document.querySelector('#input');
const output=document.querySelector('#output');
const encodeButton =document.querySelector('#encode-button');
const decodeButton =document.querySelector('#decode-button');
const resetButton=document.querySelector('#reset-button');

encodeButton.addEventListener('click',() =>{
  output.value=encodeURIComponent(input.value);
});
decodeButton.addEventListener('click',() => {
    output.value = decodeURIComponent(input.value);
});

resetButton.addEventListener('click',()=>{
  input.value="";
  output.value="";
  });