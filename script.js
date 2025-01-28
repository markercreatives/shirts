const tshirt = document.getElementById('tshirt');

function changeColor(color) {
    tshirt.style.backgroundColor = color;
}

function addText() {
    const textInput = document.getElementById('textInput').value;
    if (!textInput) return;

    const textElement = document.createElement('div');
    textElement.textContent = textInput;
    textElement.className = 'text-item';
    textElement.style.left = '50px';
    textElement.style.top = '50px';
    tshirt.appendChild(textElement);

    makeDraggable(textElement);
}

function addImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.className = 'image-item';
        imgElement.style.left = '50px';
        imgElement.style.top = '50px';
        tshirt.appendChild(imgElement);

        makeDraggable(imgElement);
    };
    reader.readAsDataURL(file);
}

function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener('mousedown', function (e) {
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            element.style.left = `${e.pageX - offsetX}px`;
            element.style.top = `${e.pageY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });
}
