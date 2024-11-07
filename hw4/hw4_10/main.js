
function minValue(numbers){
    let min=numbers[0];
    for (const number of numbers) {
       if (number<min){min=number}
    }
return min;
}
console.log(minValue([5,2,34,56,89,45,3]));