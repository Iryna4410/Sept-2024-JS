function stringToarray(str){
    if (str){
        let split = str.split(' ');
        return str;
    }
    return [' '];
}
let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str);
console.log(stringToarray(arr));