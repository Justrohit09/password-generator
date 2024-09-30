let inputEL=document.getElementById("input");
let copyBtn=document.getElementById("btn2");
let rangeSlider=document.getElementById('input-range');
let displaylength=document.getElementById('display-length');

var currentValue;
rangeSlider.addEventListener('input',(slide)=>{
    currentValue=rangeSlider.value;
    displaylength.textContent=rangeSlider.value;
})


// password generate
let chars='123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXY';
let char=chars.toUpperCase();
var password='';
let length=6;
let generatePassword =()=>{
    
    for(let i=0;i<currentValue;i++){
    password+=char.charAt(Math.floor(Math.random()*char.length))
}
return password
}





let generateBtn=document.getElementById("btn1");
generateBtn.addEventListener('click',()=>{
    
    inputEL.value=generatePassword();
})





// copy function
const copyPassword=()=>{
    var copyText=document.getElementById("input");
    copyText.select();
    copyText.setSelectionRange(0,length);
    document.execCommand("copy");
}


btn2.addEventListener('click',copyPassword)
window.location.reload();


