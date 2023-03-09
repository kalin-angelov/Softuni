function lengthLimit() {

    class Stringer{
        constructor (innerString,innerLength) {
            this.innerString = innerString;
            this.innerLength = Number(innerLength);
        }

        increase(length) {
            this.innerLength += length;
            return;
        }

        decrease(length) {
            this.innerLength -= length;
            if (this.innerLength < 0) {
                this.innerLength = 0;
            };
            return;

        }

        toString() {
            let result = this.innerString;
            let dotDotDot = '...';
            if(this.innerLength === 0) {
                result = dotDotDot;
                return result;
            } else if (this.innerLength > 0 && result.length === this.innerLength) {
                return result;
            } else if (this.innerLength > 0 && this.innerLength < result.length) {
                result = result.slice(0,this.innerLength) + dotDotDot;
                return result;
            } else {
                return result;
            }
            
        }
    }
    let test = new Stringer("Test", 5);
    console.log(test.toString()); // Test
    
    test.decrease(3);
    console.log(test.toString()); // Te...
    
    test.decrease(5);
    console.log(test.toString()); // ...
    
    test.increase(4); 
    console.log(test.toString()); // Test
        
}
lengthLimit()
