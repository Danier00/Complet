const faker = require("faker");
class usersService{
constructor(){
    this.users = [];
    this.generate()
  }

  generate(){
    let limit = 100;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: Math.trunc(Math.random()*100),
        name: faker.name.findName(),
        birthday: faker.date.past(30, new Date('2005-01-01')),
        phone: faker.phone.phoneNumber(),
      });
    }
  }

  create(){

  }
  find(){
    return this.users;
  }
  findOne(id){
    id=parseInt(id);
    return this.users.find(item => item.id === id);
  }
  update(){

  }
  delete(){

  }
}
module.exports = usersService;
