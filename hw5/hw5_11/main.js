let sum=(arr)=>{
    let sumArr =0;
    for (const item of arr){
        sumArr=sumArr+item;
    }
    return sumArr;
}
console.log(sum([2,3,4,5]));