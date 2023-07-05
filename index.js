const PassInputEl = document.getElementById("password");
const submitbtnEl = document.getElementById("btn")
const formEl = document.getElementsByTagName("form")[0]

let password = "";
let Random = "";
let Stored = "";
submitbtnEl.addEventListener('click', () => {
    const Element = '123456trewqQWERTYAZXCVBNMasdfghUI7890-=][poiuyOPLKJHGFDSjkl;<mnnbvcxz/>*-+';
    for (let i = 0; i < 8; i++) {
        Random =Math.floor(Math.random() * Element.length);
        Stored +=  Element.substring(Random,Random + 1);
    }
    console.log(Stored);
    PassInputEl.value = Stored;
    Stored = "";
});

const iconEl = document.getElementById("icon");

formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
})