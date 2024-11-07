function myFunction(array){
document.write(`<ul>`)
    for (const item of array) {
document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
myFunction([12,34,true,"lorem",false]);