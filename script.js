const tshirt = document.getElementById('tshirt');

function changeColor(color) {
    tshirt.style.backgroundColor = color;
}

function addText() {
    const textInput = document.getElementById('textInput').value;
    if (!textInput) return;

    const textElement = document.createElement('div');
    textElement.textContent = textInput;
    textElement.style.position = 'absolute';
    textElement.style.left = '50px';
    textElement.style.top = '50px';
    textElement.style.cursor = 'move';
    tshirt.appendChild(textElement);
}

function addImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.style.position = 'absolute';
        imgElement.style.left = '50px';
        imgElement.style.top = '50px';
        imgElement.style.maxWidth = '100px';
        imgElement.style.cursor = 'move';
        tshirt.appendChild(imgElement);
    };
    reader.readAsDataURL(file);
}
