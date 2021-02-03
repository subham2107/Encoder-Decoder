const input=document.querySelector('#input');
const output=document.querySelector('#output');
const button=document.querySelector('#encode-button');
button.addEventListener('click',()=>{
output.value=window.btoa(input.value);

});


