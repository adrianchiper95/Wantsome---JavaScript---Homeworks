const colorContainer = document.getElementById('color-container');
const requestURL = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.onload = () => {
    const colorsDataObj = JSON.parse(request.responseText);
    const colorsDataKeys = Object.keys(colorsDataObj);
    for (let i = 10; i <= colorsDataKeys.length; i++) {
        const lineContainer = document.createElement('div');
        lineContainer.style.marginBottom = '10px';
        const colorSquare = document.createElement('span');
        colorSquare.style.display = 'inline-block';
        colorSquare.style.width = '30px';
        colorSquare.style.height = '30px';
        colorSquare.style.backgroundColor = colorsDataKeys[i];
        lineContainer.appendChild(colorSquare);
        const text = document.createElement('span');
        text.textContent = colorsDataKeys[i];
        text.style.display = 'inline-block';
        text.style.marginLeft = '10px';
        text.style.position = 'relative';  
        text.style.bottom = '10px';
        lineContainer.appendChild(text);
        colorContainer.appendChild(lineContainer);
    };
};

request.send();


