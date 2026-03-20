function unselectAll() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radio) {
        radio.checked = false;
    });
}

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {

    const lengthInput = Number(document.getElementById('length').value);
    const includeUppercaseInput = document.getElementById('uppercase').checked;
    const includeLowercaseInput = document.getElementById('lowercase').checked;
    const includeNumbersInput = document.getElementById('numbers').checked;
    const includeSymbolsInput = document.getElementById('symbols').checked;
    const passwordOutput = document.getElementById('output');

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allowedChars = "";
    let password = "";

    if (includeUppercaseInput) {
        allowedChars += uppercaseChars;
    }
    if (includeLowercaseInput) {
        allowedChars += lowercaseChars;
    }
    if (includeNumbersInput) {
        allowedChars += numberChars;
    }
    if (includeSymbolsInput) {
        allowedChars += symbolChars;
    }

    if (allowedChars.length === 0) {
        passwordOutput.textContent = "Please select at least one character type.";
        return;
    }

    if (lengthInput < 8 || lengthInput > 40) {
        passwordOutput.textContent = "Please enter a length between 8 and 40.";
        return;
    }

    for (let i = 0; i < lengthInput; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    passwordOutput.textContent = password;
}