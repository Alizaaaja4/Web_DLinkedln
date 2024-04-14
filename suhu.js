function validForm(event){
    event.preventDefault();

    const username = document.getElementById('username').value 
    const password = document.getElementById('password').value 

    if (username === 'quiz' && password === "123"){
        alert('Anda berhasil login!!');
        setTimeout(() => {
            yuuLogin();
        }, 200);
    } else {
        alert('Username atau password salah. Silahkan coba lagi.');
    }
}

function yuuLogin(){
    window.location.replace("home.html");
}

// timer setting
const timerSpan = document.querySelector('#timer')

function countdown(seconds){
    const timerInterval = setInterval(function(){
        if(seconds >= 0){
            timerSpan.innerText = seconds --;
        } else {
            clearInterval(timerInterval)
            alert("Waktu telah habis, jawaban anda akan terkirim!!")
    
            var newUrl = "index.html";
            window.history.replaceState(null, null, newUrl); 
            window.location.href = newUrl;
        }
    }, 1000)
}

countdown(300)

// kirim jawaban
function kirim() {
    var jawaban = document.getElementById("answer").value;

    alert("Jawaban anda telah terkirim!!")
    
    var newUrl = "index.html";
    window.history.replaceState(null, null, newUrl); 
    window.location.href = newUrl; 
}