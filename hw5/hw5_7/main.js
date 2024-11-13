
let listNumber=(list,number)=>{
    document.write(`<ul>`)
    for (i=0;i<number;i++){
        document.write(`<li>${list}</li>`)
    }
    document.write(`</ul>`)
}
listNumber('Lorem ipsum',4);