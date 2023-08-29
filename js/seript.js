let findNumber = document.getElementById('number');
let findNumberValue = parseInt(findNumber.innerText);
let stopIn = document.getElementById('stopIn');
let number=false;
function countDown(){
    let timeFound=document.getElementById('number').innerText;
    number=setInterval( () => {
        let number =++timeFound;
        findNumber.innerText= number;
    }, 1000);
};
function stopCountDown(){
    let count =stopIn.childElementCount;
    clearInterval(number);
    let timeIs= document.getElementById('number').innerText;
    let p= document.createElement('p')
    p.innerText=`${count+1} STOP IN: ${timeIs}`;
    stopIn.appendChild(p);
}
function resetFunction(){
    clearInterval(number);
    findNumber.innerText='00';
    stopIn.innerHTML=''; 
    window.location.href="index.html";
}

