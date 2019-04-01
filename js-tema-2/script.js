// Exc. 1 
function cnpSex(cnp) {
    switch(true) {
        case cnp >= 1000000000000 && cnp <= 1999999999999:
        return "Persoana verificata este de sexul M";
        break;
        case cnp >= 2000000000000 && cnp <= 2999999999999:
        return "Persoana verificata este de sexul F";
        break;
        case cnp >= 5000000000000 && cnp <= 5999999999999:
        return "Persoana verificata este de sexul M";
        break;
        case cnp >= 6000000000000 && cnp <= 6999999999999:
        return "Persoana verificata este de sexul F";
        break;
        case cnp >= 7000000000000 && cnp <= 7999999999999:
        return "Persoana verificata este de sexul M";
        break;
        case cnp >= 8000000000000 && cnp <= 8999999999999:
        return "Persoana verificata este de sexul F";
        break; 
        default:
        return "CNP gresit!"
    }
}

console.log(cnpSex(1950503046277));
console.log(cnpSex(2970523340594));
console.log(cnpSex(5010401379401));
console.log(cnpSex(6010426226292));
console.log(cnpSex(7930611109743));
console.log(cnpSex(8901108515243));

// Nu stiu daca trebuia dar am facut si pentru toate tipurile de CNP.

// Exc. 2
var myGrade = function(score) {
    switch(true) {
        case score >= 1 && score <= 3:
        return 'Calificatul corespunzator punctajului ' + score + ' este E';
        break;
        case score >= 4 && score <= 6:
        return 'Calificatul corespunzator punctajului ' + score + ' este D';
        break;
        case score >= 7 && score <= 8:
        return 'Calificatul corespunzator punctajului ' + score + ' este B';
        break;
        case score = 9:
        return 'Calificatul corespunzator punctajului ' + score + ' este A';
        break;
        case score = 10:
        return 'Calificatul corespunzator punctajului ' + score + ' este A+';
    }
}

console.log(myGrade(2.5))

