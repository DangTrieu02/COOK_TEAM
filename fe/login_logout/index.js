let pwEye = document.getElementById('sp-pw-eye');
let  inputPW = document.getElementById('password');

pwEye.onclick = () => {
    let typeInputPw = inputPW.getAttribute('type');
    let typeNew = (typeInputPw === 'password') ? 'text' : 'password';
    inputPW.setAttribute('type', typeNew);
    let classNameCurrent = pwEye.getAttribute('class');
    let newClassEye = (classNameCurrent === 'fa-solid fa-eye') ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    pwEye.setAttribute('class', newClassEye)
}

// ----------------------------------------------------------------
let pwEyeRegister = document.getElementById('eye-register');
let inputPwRegister = document.getElementById('psw');
pwEyeRegister.onclick = () => {
    let typeInputPw = inputPwRegister.getAttribute('type');
    let typeNew = (typeInputPw === 'password') ? 'text' : 'password';
    inputPwRegister.setAttribute('type', typeNew);
    let classNameCurrent = pwEyeRegister.getAttribute('class');
    let newClassEye = (classNameCurrent === 'fa-solid fa-eye') ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    pwEyeRegister.setAttribute('class', newClassEye)
}


// validate
let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    let numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if(myInput.value.length >= 6) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}


let htmlOptionsYear = '';
let year = new Date();
for (let i = year.getFullYear(); i >= 1905 ; i--) {
    htmlOptionsYear += `<option value="${i}">${i}</option>`
}
document.getElementById('year').innerHTML = htmlOptionsYear


function updateDays() {
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const selectedMonth = parseInt(monthSelect.value);
    let daysInMonth;
    
    // Tính số ngày trong tháng
    if (selectedMonth === 2) {  
        const currentYear = new Date().getFullYear();
        daysInMonth = (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0 ? 29 : 28;
    } else if (selectedMonth === 4 || selectedMonth === 6 || selectedMonth === 9 || selectedMonth === 11) {
        daysInMonth = 30;
    } else {
        daysInMonth = 31;
    }
    
    // Cập nhật các option của ô select ngày
    let htmlOptionsDay = '';
    for (let i = 1; i <= daysInMonth; i++) {
        htmlOptionsDay += `<option value="${i}">${i}</option>`;
    }
    daySelect.innerHTML = htmlOptionsDay;
    }
    
  // Khởi tạo ô select ngày với số ngày trong tháng hiện tại
    updateDays();