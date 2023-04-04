let container = document.getElementById('container')
for (let i = 1; i < 6; i++) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);

    let div = document.createElement('div');
    div.className = "element";
    div.innerHTML = `<p style="color: ${color}">Element ${i} </p>`;
    container.appendChild(div)
}