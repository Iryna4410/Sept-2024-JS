let suits=['spade', 'diamond','heart', 'clubs'];
let values=['6','7','8','9','10', 'ace','jack','queen','king'];
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



const reduce=cards.reduce((accum,card)=>
{
    switch (card.cardSuits) {
        case 'spade':
            accum.spades.push(card);
            break;

        case 'club':
            accum.clubs.push(card);
            break;

        case 'diamond':
            accum.diamonds.push(card);
            break;

        case 'heart':
            accum.hearts.push(card);
            break;


    }
    return accum;
},
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);