
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
// Array.prototype.myForEach=function (callback) {
//    const myArray=this;
//     for (const item of myArray) {
//         callback(item);
//     }
// };
// let arr=[
//     11,55,99
// ]
// arr.myForEach((x)=>console.log(x));

Array.prototype.myFilter=function (predicate) {
    const arr=[];
    for (const item of this) {
        if (predicate(item))
        {arr.push(item);
        }
    }
    return arr;
};