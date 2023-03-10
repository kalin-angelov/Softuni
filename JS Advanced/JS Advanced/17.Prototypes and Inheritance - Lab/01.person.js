function createPerson (firstName, lastName) {
    return {
        firstName,
        lastName,
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        set fullName(value) {
            let valueSplit = value.split(' ');
            if (valueSplit.length === 2) {
                this.firstName = valueSplit[0];
                this.lastName = valueSplit[1];
            }
        }
    };
}
let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson
