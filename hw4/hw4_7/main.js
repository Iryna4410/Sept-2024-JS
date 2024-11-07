function myFunction(list,counter) {

    document.write(`<ul>`)
    for (let i=0;i<counter;i++){
        document.write(`<li>${list}</li>`);
    }
    document.write(`</ul>`)
}
myFunction("lorem",12)