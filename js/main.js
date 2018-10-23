const cat = {
    name: 'Bailey',
    age: 2,
    meow(){
      console.log('Hello world')
    },
    sayName(name){
      console.log(`Hello ${name}`)
    }
  }
  
  cat.sayName('Murugan');
  delete cat.sayName
  
  console.log(cat)