// Use javascript to create a button and on click function that is linked to the HTML

let button = document.createElement('button')
button.id = 'btn'
button.innerHTML = '0';
document.body.appendChild(button)
button.onclick = function() {
button.innerHTML = (parseInt(button.innerHTML) + 1)
};