(function stringExtension() {

    String.prototype.ensureStart = function (word) {
        
        return !this.startsWith(word) ? word + '' + this.toString() : this.toString();     
    }

    String.prototype.ensureEnd = function (word) {

        return !this.endsWith(word) ? this.toString() + '' + word : this.toString();
    }

    String.prototype.isEmpty = function () {
        
        return this.length === 0 ? true : false;
    }

    String.prototype.truncate = function (num) {

        let string = this.toString();
        if (string.length <= num) {
            return string;
        } else if (string.length > num && string.includes(' ')) {
            if (num <= 3) {
                return '.'.repeat(num);
            }
            while (string.length > num) {
                string = string.split(' ');
                string.pop();
                string = string.join(' ') + '...';
                if(string.length <= num) {
                    return string
                }
            }
        } else if (string.length >= num && !string.includes(' ')) {
            if (num <= 3) {
                return '.'.repeat(num);
            } else {
                let char = num - 3;
                return string.slice(0, char) + '...';
            }
        }
    }

    String.format = function (string, ...params) {

        for (let i = 0; i < params.length; i ++) {
            if (string.includes('{' + i + '}')) {
                string = string.replace('{' + i + '}', params[i]);
            }
        }
        return string;
    }
    
})()
