const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

convertBtn.addEventListener('click', () => {
    event.preventDefault();
    if (number.value === "") {
        output.style.fontSize = '25px';
        output.style.color = 'red';
        output.textContent = "Please enter a valid number";
        return;
    }

    const num = parseInt(number.value);

    if (isNaN(num) || num < 1) {
        output.style.fontSize = '24px';
        output.style.backgroundColor = '#fff';
        output.style.color = 'red';
        output.textContent = "Please enter a number greater than or equal to 1.";
        return;
    }

    if (num >= 4000) {
        output.style.fontSize = '24px';
        output.style.backgroundColor = '#fff';
        output.style.color = 'red';
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }
  
   
    function convertToRoman(nume) {
        const romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];

        let result = '';

        for (let i = 0; i < romanNumerals.length; i++) {
            while (nume >= romanNumerals[i].value) {
                result += romanNumerals[i].numeral;
                nume -= romanNumerals[i].value;
            }
        }

        return result;
       
    }
    if(num){

    const romanNumber = convertToRoman(num);
    output.style.backgroundColor = '#707B7C';
    output.style.fontSize = '35px'; // Ajout de la taille de police
    
    output.style.color = '#fff'; //
    output.textContent = romanNumber;
    return; 
    }

});


