// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor( id, name, surname , email, phone, order ) {
        this.id=id;
        this.name = name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }


}
class Order{
    constructor(title,price) {
        this.tittle=title;
        this.price=price;
    }

}

let client=[
    new Client(1,'Ira','Kovbasniuk','iryna.kovbasnyuk@gmail.com','0996754939',[new Order('cbb',1220)]),
    new Client(2,'Ira','Kovbasniuk','iryna.kovbasnyuk@gmail.com','0996754939',[new Order('fg',33)]),
    new Client(3,'Ira','Kovbasniuk','iryna.kovbasnyuk@gmail.com','0996754939',[new Order('fgh',55)]),
    new Client(4,'Ira','Kovbasniuk','iryna.kovbasnyuk@gmail.com','0996754939',[new Order('fgkk',88)]),
    new Client(5,'Ira','Kovbasniuk','iryna.kovbasnyuk@gmail.com','0996754939',[new Order('rtt',99)]),
    new Client(6,'Andriy','LOrem','fgh@jhjg','ghjkl',[new Order('fg',44)]),
    new Client(7,'Andriy','LOrem','fgh@jhjg','ghjkl',[new Order('fg',44)]),
    new Client(8,'Andriy','LOrem','fgh@jhjg','ghjkl',[new Order('fg',44)]),
    new Client(9,'Andriy','LOrem','fgh@jhjg','ghjkl',[new Order('fg',44)]),
    new Client(10,'Andriy','LOrem','fgh@jhjg','ghjkl',[new Order('fg',44)]),
]
console.log(client);