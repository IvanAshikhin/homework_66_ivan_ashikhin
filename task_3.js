let container = document.getElementById('container')

for (let i = 1; i < 6; i++) {
    let div = document.createElement('div');
    div.className = "element";
    div.innerHTML = `Element ${i}`;
    container.appendChild(div)
}