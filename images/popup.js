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

document.getElementsByClassName('example').onclick = function(e) {
    console.log(e.target)
}
