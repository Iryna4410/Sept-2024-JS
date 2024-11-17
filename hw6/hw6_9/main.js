// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

let suits = ['spade', 'diamond','heart', 'clubs'];
let values = ['6','7','8','9','10', 'ace','jack','queen','king'];
let cards=[];
for (const suit of suits) {
    for (const value of values) {
let card={cardSuits:suit, value:value};
if (suit==='heart'||suit==='diamond'){
    card.color='red';}
        else {
            card.color='black';
}

cards.push(card)

    }
}
console.log(cards);


console.log(cards.find(card=>card.value==='ace'&& card.cardSuits==='spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card=>card.color==='red'));
console.log(cards.filter(card=>card.cardSuits==='diamond'));
console.log(cards.filter(card=>card.cardSuits==='clubs'&&(card.value!=='6'|| card.value!=='7' || card.value!=='8')));



