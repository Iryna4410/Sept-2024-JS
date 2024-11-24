// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }


}
const cinderellas=[
    new Cinderella('cc',12,34),
    new Cinderella('cm',12,35),
    new Cinderella('cn',12,36),
    new Cinderella('cinderella',15,33),
    new Cinderella('cx',12,32),
    new Cinderella('co',12,38),
    new Cinderella('cz',12,30),
    new Cinderella('cs',12,31),
    new Cinderella('cq',12,37),
    new Cinderella('ca',12,39),
]
const prince=new Prince('prince',20,33)
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize===prince.slipper){
//         prince.wife=cinderella;
//     }
// }
// console.log(prince.wife);
const cinderellaMain=cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
prince.wife=cinderellaMain;
console.log(cinderellaMain);