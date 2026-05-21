function changecolor(boxId, colour) {
    const colormap = {
        red: 'red',
        blue: 'blue',
        green: 'green',
        yellow: 'yellow'
    };

    const box = document.getElementById(boxId);
    box.style.backgroundColor = colormap[colour];
    box.classList.add('colored');
}

function greetUser() {
        const name = document.getElementById('nameInput').value.trim();
        const greeting = document.getElementById('greeting');
        greeting.innerText = name ? "Hello, " + name : "Hello";
}

document.getElementById('nameInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') greetUser();
});