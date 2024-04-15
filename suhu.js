let whoIAM = ''

function validForm(event){
    event.preventDefault();

    const username = document.getElementById('username').value 
    const password = document.getElementById('password').value 

    if (username === 'quiz' && password === "123"){
        whoIAM = prompt ('Siapa nama kamu ?')
        alert(`
        Hallo ${whoIAM} 👋🏻
        Selamat kamu berhasil login!!`)
        setTimeout(() => {
            yuuLogin();
        }, 200);
    }  else if (username === 'quiz'){
        alert('Password yang anda masukan salah!!')
    } else if (password === '123'){
        alert('Username yang anda masukan salah!!')
    }else {
        alert('Username atau password salah. Silahkan coba lagi.');
    }
}

function yuuLogin(){
    alert (`
    Haii, ${whoIAM} tolong perhatikan ketentuan dibawah ini ya!!
    1. Quizezzz ini memiliki 1 pertanyaan
    2. Waktu pengerjaaan adalah 5 menit
    3. Jika waktu habis, maka jawaban akan tersubmit otomatis
    4. Selamat mengerjakan 😊
    `)
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
    if (!jawaban) {
        alert("Anda harus mengisi jawaban terlebih dahulu!");
        return; 
    }
    
    alert("Jawaban anda telah terkirim!!");
    
    let feedback = prompt('Berikan kami feedback !!');
    if (feedback === null || feedback === "") {
        alert('Anda harus wajib memberikan feedback!!');
        kirim(); 
    } else {
        confirm(`Terimakasih atas feedback Anda: "${feedback}" 🙏🏻`);
        window.location.href = "index.html";
    }
}


// const h6 = document.createElement('h6')
// h6.textContent = "Developed by Aliza Nurfitrian"
// body.append(h6)
const body = document.body
const foot = document.getElementById('mee')
foot.style.color = 'white'
foot.style.textAlign = 'center'
foot.style.marginTop = '80px'
foot.style.fontWeight = '600'