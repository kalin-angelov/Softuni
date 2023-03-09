function sortedList() {

    class List {
        constructor(array = []) {
            this.array = array.sort((a, b) =>  a - b);
            this.size = this.array.length;
        }
    
        add(element) {
            this.array.push(element);
            this.array.sort((a, b) => a - b);
            this.size++;
        }
    
        remove(index) {
            if (index < 0 || index >= this.array.length) {
                throw new Error(`Index doesn't exist`);
            } else {
                this.array.splice(index, 1);
                this.size--;
            }
        }
    
        get(index) {
            if (index < 0 || index >= this.array.length) {
                throw new Error(`Index doesn't exist`);
            } else {
                return this.array[index];
            }
        }
    }

    let list = new List();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.remove(0);
    console.log(list.size);
    
}
sortedList()
