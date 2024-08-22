class Cat {
    static sound = "야옹";

    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }
}

class Rabbit extends Cat {
    constructor(name, speed, age) {
        super(name, speed);  // Pass name and speed to the Cat constructor
        this.age = age;
    }

    rabbitSounds() {
        alert(`고양이: ${Cat.sound}~!!`);
        return 'Cat';
    }

    catSounds() {
        alert(`${this.name}: ${Cat.sound}~!!`);
        return 'Rabbit';
    }
}


let rabbit = new Rabbit("흰 토끼", "20", "3살");


function instanceChange() {
    Rabbit.sound = "인스턴스";
    console.log(`Rabbit.sound = "인스턴스" 변경 후`);
    console.log("Rabbit.sound: ", Rabbit.sound);
    console.log("Cat.sound: ", Cat.sound);
}
function instanceBeforeChange() {
    console.log(`Rabbit.sound = "인스턴스" 하기 전`);
    console.log("Rabbit.sound: ", Rabbit.sound);
    console.log("Cat.sound: ", Cat.sound);
};
function classChange() {
    Cat.sound = "클라스";
    console.log(`Cat.sound = "클라스" 변경 후`);
    console.log("Rabbit.sound: ", Rabbit.sound);
    console.log("Cat.sound: ", Cat.sound);
}
function classBeforeChange() {
    console.log(`Cat.sound = "클라스" 하기 전`);
    console.log("Rabbit.sound: ", Rabbit.sound);
    console.log("Cat.sound: ", Cat.sound);
};

function reload() {
    return window.location.reload();
}