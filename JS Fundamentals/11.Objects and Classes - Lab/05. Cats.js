function cats(arrayWithCats) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let cat of arrayWithCats) {
        cat = cat.split(' ');
        let name = cat[0];
        let age = cat[1];
        let catSays = new Cat(name, age);
        catSays.meow()
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])
