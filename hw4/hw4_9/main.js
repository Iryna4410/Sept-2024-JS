function myFunction(users){
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
myFunction([
    {id:1,name:"lorem",age:23},
    {id:2,name:"lorem",age:23},
    {id:3,name:"lorem",age:23},
    {id:3,name:"lorem",age:23}
]);