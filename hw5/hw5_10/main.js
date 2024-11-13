let minValue=(numbers)=>{
    let min=numbers[0];
    for (const number of numbers) {
        if (number<min){min=number}
    }
return min;
}
console.log(minValue([5,2,1,56,89,45,3]));