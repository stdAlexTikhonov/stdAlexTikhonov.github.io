const popupContainer = document.createElement('div');

Object.assign(popupContainer.style, {
    height: '100vh',
    width: '100%',
    display: 'flex',
    background: rgba(0,0,0,0.5)
});

let popup = document.createElement('div');

Object.assign(popup.style, {
    margin: 'auto',
    width: '40%',
    height: '70vh',
});

popupContainer.appendChild(popup);

popupContainer.onclick = function() {
    document.body.removeChild(popupContainer);
}

popup.onclick = function(e) {
    e.stopPropagation();
}

let elements = document.getElementsByClassName('example')

for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function(e) {
        console.log(e.target)
    }
}
