function User(id,name,surname,email, phone) {
    this.id =id;
    this.name =name;
    this.surname =surname;
    this.email =email;
    this.phone =phone;
}
let users=[
    new User(1,'vasya','lorem','bjb','09835264657'),
    new User(2,'vasyaa','lorem','bjb','09835264657'),
    new User(3,'anna','lorem','bjb','09835264657'),
    new User(4,'vasya','lorem','bjb','09835264657'),
    new User(5,'vasya','lorem','bjb','09835264657'),
    new User(6,'vasya','lorem','bjb','09835264657'),
    new User(7,'vasya','lorem','bjb','09835264657'),
    new User(8,'vasya','lorem','bjb','09835264657'),
    new User(9,'vasya','lorem','bjb','09835264657'),
    new User(10,'vasya','lorem','bjb','09835264657')]

const filterFunction=(user)=> user.id%2===0;

console.log(users.filter(filterFunction));

