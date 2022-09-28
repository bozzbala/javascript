
class Shape{

    constructor(){}

    set setWidth(width){
        this.width = width;
    }

    set setHeight(height){
        this.height = height;
    }

    get Perimeter(){
        return (this.width*2) + (this.height*2);
    }
}

const kvadrat = new Shape();
kvadrat.setWidth = 3;
kvadrat.setHeight = 3;
console.log(kvadrat.Perimeter);



let obj = {
    get propName() {
      // геттер, срабатывает при чтении obj.propName
    },
  
    set propName(value) {
      // сеттер, срабатывает при записи obj.propName = value
    }
  };

let a = "меня зовут Джейк";
let b = "Финном";
console.log("Привет, " + a + ". У живу на дереве с другом " + b);


class Gun{
  #isLoaded;

  #Reload(){
    console.log("Заряжаю...");

    this.#isLoaded = true;

    console.log("Заряжено!");
  }

  get Shoot(){
    if(!this.#isLoaded){
      console.log("Пушка не заряжена!")
      this.#Reload();
      this.Shoot;
    }
    else{
      console.log("Пыщ-пыщ-пыщ");
      this.#isLoaded = false;
    }
  }
}



class User{

  constructor(id, name, age, email, login){
    this.#id = id;
    this.#name = name;
    this.#age = age;
    this.#email = email;
    this.#login = login;
  }

  get getId(){
    return this.#id;
  }

  get getName(){
    return this.#name;
  }

  get getAge(){
    return this.#age;
  }

  get getEmail(){
    return this.#email;
  }

  get getLogin(){
    return this.#login;
  }

  set setId(id){
    this.#id = id;
  }

  set setName(name){
    this.#name = name;
  }

  set setAge(age){
    this.#age = age;
  }

  set setEmail(email){
    this.#email = email;
  }

  set setLogin(login){
    this.#login = login;
  }

  get toString(){
    return "Id: " + this.getId
    + ", Имя: " + this.getName
    + ", Возраст: " + this.getAge
    + ", Почта: " + this.getEmail
    + ", Логин: " + this.getLogin;
  }
}


class Account{

  constructor(balance){
    this.#balance = balance;
  }

  get getBalance(){
    return "Ваш баланс составляет " + this.#balance + " тенге.";
  }
  set setBalance(deposit){
    this.#balance = this.#balance + deposit;
  }
}

let User = { id: 27737, name: "Damir", age: 14 };
console.log(User.id);
console.log(User.name);
console.log(User.age);

let data = [
  {
    id: 1,
    text: "Привет!"
  },
  {
    id: 2,
    text: "Привет)"
  },
  {
    id: 3,
    text: "Как дела?"
  },
  {
    id: 4,
    text: "Отлично!"
  }
]

