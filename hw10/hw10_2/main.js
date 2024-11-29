// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
let input=document.createElement('input');
input.type = 'number';
input.placeholder='Введіть ваш вік'
document.body.appendChild(input);
let button=document.createElement('button');
button.innerText="Перевірка віку"
document.body.appendChild(button);
button.onclick=()=>{
    if (input.value<18){
document.write('Ваш вік менше 18 років')}
    else if(input.value == 18){
        document.write("Вам 18 років")
    }
        else if (input.value>18){
            document.write('Ваш вік більше 18 років')
        }

}

