// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку
//     .Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let div = document.createElement("div");
div.id='text';
div.innerText="lorem Ipsum";
document.body.appendChild(div);



let button = document.createElement("button");
button.innerText="lorem ipsum";
document.body.appendChild(button);
button.onclick=()=>{
    document.getElementById('text').remove();
}
