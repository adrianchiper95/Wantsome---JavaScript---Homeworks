//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - outpot 15 // myFunction(10,10) - output 100
function calculate(x, y) {
    if(x===y) {
       return x*y;
    }else {
      return x+y;
    }
       }
  console.log(calculate(10, 10));
  console.log(calculate(10, 5));
  //Ex2
  //Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
  //ex testFunction(30, 30) - true 
  //testFunction(15,15) - true
  //testFunction(10, 15) - false
  function testFunction(a, b) {
    if(a===30 && b===30) {
       return true;
      
     }if (a+b===30) {
       return true;
     }else{
       return false;
     }
  }
  console.log(testFunction(30, 30));
  console.log(testFunction(15, 15));
  console.log(testFunction(10, 15));
  //Ex3
  //Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
  //checkString('JSisAwsome') - JSisAwsome
  //checkString('isEasy') - JSisEasy
  //checkString(null) - JS
  function checkString(str) {
      if (typeof str === 'string'){
      return true;
   }else {
      return false;
   } 
  }
  console.log(checkString(3));
  
  var a = 'JS';
  function checkStr(chr){
      if (chr.slice(0, 2) === a) {
          return chr;
      } else if (chr != a){
          return a + chr;
      } else {
          return a;
      }
  }
  console.log(checkStr('JSisAwsome'));
  console.log(checkStr('isEasy'));
  //Ex4
  //Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
  //removeDuplicates('aabcdeef') - 'abcdef'
  //removeDuplicates(122334) - 1234
  
  function removeDuplicates(str) {
    var uniqueStr='';
    for(var i=0; i<str.length; i++) {
        if(uniqueStr.indexOf(str[i])===-1) {
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
  }
  console.log(removeDuplicates('aabcdeef'))
  //Ex5
  // Gasiti cel mai lung string intr-o fraza
  //findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
function findLongestString(str) {
    var stringArray = str.split(' ');
    var longestString = stringArray.reduce(function(a, b) {
      if (b.length > a.length) {
        return b;
      } else {
        return a;
      }
    });
    return longestString;
  }
  console.log(findLongestString('Wantsome is Awsomeeee today'));
  //Ex6
  //Scrieti o functie care sa aiba output-ul asta
  // *  
  // * *  
  // * * *  
  // * * * *  
  // * * * * *  
  var starDraw = function() {
    var star = "* ";
    for (var i = 0; i < 6; i++) {
    console.log(star.repeat(i));
    };
    };
    starDraw();

//ex7
 // const negativeNumbers = [];

  //function extractNegativeNumbers(numbers) {
      // append any negative numbers found in the numbers array 
      // into the negativeNumbers array constant variable above
   
  //}
  //extractNegativeNumbers([1,2,-5,4,-6])

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2
function numCal (num_1, num_2, opr) {
   switch(true) {
       case opr === 'add':
       return num_1 + num_2;
       break;
       case opr === 'substract':
       return num_1 - num_2;
       break;
       case opr === 'multiply':
       return num_1 * num_2;
       break;
       case opr === 'divide':
       return num_1 / num_2;
       break;
   } 
}
console.log(numCal(2, 5, 'add'));
console.log(numCal(10, 8, 'substract'));
//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7
function isDiv(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'BOTH';
    }else if (num % 3 === 0) {
        return 'THREE';
    }else if (num % 5 === 0) {
        return 'FIVE';
    }else {
        return num;
    }
}
console.log(isDiv(15));
console.log(isDiv(9));
console.log(isDiv(7));

//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false
function validPin(pin) {
    if (pin > 1000 && 9999 >= pin) {
        return true;
    } else {
        return false;
    }
}
console.log(validPin('1234'));
console.log(validPin('12345'));
console.log(validPin('z23f'));
//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false
function isSquareNumber(num) {
    var squareRoot = Math.sqrt(num);
    if (num/squareRoot===squareRoot) {
        return true;
    }else {
        return false;
    }
}
console.log(isSquareNumber(-1));
console.log(isSquareNumber(25));
console.log(isSquareNumber(3));
//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true