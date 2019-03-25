//1. Scrieti o functie care verifica daca un input este sau nu de tip string.
function is_string(str) {
    return typeof str === 'string';
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

//2. Scrieti o functie care verifica daca un string este gol sau nu.
function is_Blank(str1) {
return str1 === '';
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

//3. Scrieti o functie care accepta ca input un string si il transforma intr-un array de cuvinte:
string_to_array = function (a) {
    return a.trim().split(" ");
}
console.log(string_to_array("Robin Singh"));

//4. Scrieti o functie care transforma un string in forma abreviata:
function abbrev_name(b) {
b = b.split(' ');
b[1] = b[1].slice(0,1) + '.';
b = b.join(' ');
return b
}
console.log(abbrev_name("Robin Singh"));

//5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):
function capitalize(c){
    return c.charAt(0).toUpperCase() + c.slice(1);
}
console.log(capitalize('js string exercises'));

//6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:
function truncate_string(d, num) {
return d.slice(0, 4);
}
console.log(truncate_string("Robin Singh",4));

//7. Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:
function isUpperCaseAt(e, index) {
return e[index] === e[index].toUpperCase();
}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

//8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
function insert (str_main, str_second, index) {
var array = str_main.split('');
array.splice(index,0,str_second);
return array.join('');
}
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));

//9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
function remove_first_occurrence(str, toRep) {
return str.replace(toRep,'');
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

//10. Scrieti o functie care compara doua string-uri case-insensitive:
function compare_strings(str_a, str_b) {
var areSame = str_a.toUpperCase() === str_b.toUpperCase();
return areSame;
}
console.log(compare_strings('abcd', 'AbcD'));

//11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
function Uncapitalize(str) {
return str.charAt(0).toLowerCase() + str.slice(1); 
}
console.log(Uncapitalize('Js string exercises'));