function hex() {

    class Hex {
        constructor (value) {
            this.value = Number(value);
        }
        
        valueOf() {
            return this.value;
        }

        toString() {

            let num = this.value;
            let hexStr = num.toString(16);
            return '0x' + hexStr.toLocaleUpperCase();
        }

        plus(number) {
            return new Hex(this.value + number);
        }

        minus(number) {
            return new Hex(this.value - number);
        }

        parse(string) {
            let hexStr = string;
            let number = parseInt(hexStr, 16);
            return number;
        }

    }

    let FF = new Hex(255);
    console.log(FF.toString());
    FF.valueOf() + 1 == 256;
    let a = new Hex(10);
    let b = new Hex(5);
    console.log(a.plus(b).toString());
    console.log(a.plus(b).toString()==='0xF');
    console.log(FF.parse('AAA'));
       
}
hex()
