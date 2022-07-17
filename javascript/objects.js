function HouseKeeper(name, age, cook, experience) {
    this.name = name;
    this.age = age;
    this.cook = cook;
    this.experience = experience;
}

var houseKeeper1 = new HouseKeeper('jane', 19, true, 1);
var houseKeeper2 = new HouseKeeper('bella')

console.log(houseKeeper1.name, houseKeeper2.name, houseKeeper2.age);