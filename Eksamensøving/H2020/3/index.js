let body = document.body;

div = document.createElement('div');
body.append(div);

div.innerText = new Date().toLocaleTimeString();
setInterval(() => {
    div.innerText = new Date().toLocaleTimeString();
}, 1000);

setTimeout(() => {
    let button = document.createElement('button');
    button.textContent = "New color"

    let flag = false;
    button.onclick = () => {
        if (flag) {
            body.style.backgroundColor = "White";
            flag = false;
            return;
        }
        body.style.backgroundColor = "Red";
        flag = true;
    };
    body.append(button)
}, 2000);