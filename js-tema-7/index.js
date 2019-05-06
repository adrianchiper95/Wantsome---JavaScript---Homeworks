const openTextarea = () => {
    const checkText = document.getElementById('checkText');
    const textBox = document.getElementById('textBox');
    if (checkText.checked == true) {
        textBox.style.display = 'block';
    } else {
        textBox.style.display = 'none';
    }
}
document.getElementsByTagName('input')[0].addEventListener('click', openTextarea);


const enableButton = () => {
        document.getElementById('submit').disabled = false;
}
document.getElementsByTagName('textarea')[0].addEventListener('keypress', enableButton);


const txtCheck = () => {
    const txtBox = document.getElementsByTagName('textarea')[0];
    const txtBoxLength = document.getElementsByTagName('textarea')[0].textLength;
    const errorText = document.getElementById('errorText');
    if (txtBoxLength>160) {
        txtBox.style.color = 'red';
        errorText.style.display = 'block';
    
    } else {
        console.log('ok');
    }   
}
document.getElementsByTagName('button')[0].addEventListener('click', txtCheck);

