const faker = require("faker");
class catsService{
constructor(){
    this.cats = [];
    this.generate()
  }

  generate(){
    let limit = 100;
    for (let i = 0; i < limit; i++) {
      this.cats.push({
        id: Math.trunc(Math.random()*100),
        name: faker.commerce.department(),
        descrip:faker.commerce.productDescription()
      });
    }
  }

  create(data){
   
  }
  find(){
    return this.cats;
  }
  findOne(id){
    id=parseInt(id);
    return this.cats.find(item => item.id === id);
  }
  update(){

  }
  delete(){

  }
}
module.exports = catsService;
