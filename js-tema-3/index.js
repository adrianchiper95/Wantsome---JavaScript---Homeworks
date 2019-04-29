/*1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for*/

const checkEvenAndOdd = () => {

    for(let i = 0; i <= 20; i++) {
        if ( i % 2 === 0 ) {
         console.log(i + ' este numar ' + 'par' );
        } else {
         console.log(i + ' este numar ' + 'impar' );
        }   
    }
    
    /*let i = 0;
    while(i <= 20) {
        if( i % 2 === 0 ) {
            console.log(i + ' este numar ' + 'par' );
           } else {
            console.log(i + ' este numar ' + 'impar' );
           }
        i++;  */ 

    }
} 
checkEvenAndOdd();


/*2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
rezultatul. (exemplu: “3*9=27”).
Scrieti functia in doua variante: while si for*/

const addMultiplication = () => {

    /*let i = 0;
    while(i <= 10) {
        console.log(i + '*9=' + i*9 );
        i++;
    }*/

    for(let i = 0; i <= 10; i++) {
        console.log(i + '*9=' + i*9 );
    }
}

addMultiplication();

/*3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
(exemplu: 1 * 0 = 0
 1 * 1 = 1
 …
 1 * 10 = 10 )
Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”*/

const addMultiplier = (multiplier) => {
    for (let i = 1; i <= 10; i++) {
        console.log(multiplier + ' * ' + i + ' = ' + multiplier*i);
    }
}
addMultiplier(1);

/*4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ 
care se poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n  Pentru 7, 
obtii calificativul B \n ...samd “). 
Atentie: Rezultatul calificativul trebuie sa fie obtinut prin utilizarea functiei dezvoltate la tema anterioara ! */

const myGrade = () => {
    for (let score = 1; score <= 10; score++ ) {
    switch(true) {
        case score >= 1 && score <= 3:
        console.log('Pentru ' + score + ', obtii calificativul E');
        break;
        case score >= 4 && score <= 6:
        console.log('Pentru ' + score + ', obtii calificativul D');
        break;
        case score >= 7 && score <= 8:
        console.log('Pentru ' + score + ', obtii calificativul B');
        break;
        case score === 9:
        console.log('Pentru ' + score + ', obtii calificativul A');
        break;
        case score === 10:
        console.log('Pentru ' + score + ', obtii calificativul A+');
        }
    }
}

myGrade();

