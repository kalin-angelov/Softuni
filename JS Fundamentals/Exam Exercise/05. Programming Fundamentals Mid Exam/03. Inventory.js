function inventory(data) {

    let list = data.shift().split(', ');
    for (let commandInfo of data) {
        let info = commandInfo.split(' - ');
        let command = info[0];
        if (commandInfo === 'Craft!') {
            console.log(list.join(', '));
            break;
        }
        switch (command) {
            case 'Collect':
                let item = info[1];
                let itemIsInList = false;
                for (let itemInList of list) {
                    if (itemInList === item) {
                        itemIsInList = true;
                        break;
                    }
                }
                if (!itemIsInList) {
                    list.push(item)
                }
                break;
            case 'Drop':
                let itemRemove = info[1];
                for (let i = 0; i < list.length; i++) {
                    let itemInList = list[i];
                    if (itemInList === itemRemove) {
                        list.splice(i, 1);
                        break;
                    }
                }
                break;
            case 'Combine Items':
                let [oldItem , newItem] = info[1].split(':')
                for (let k = 0; k < list.length; k++) {
                    let item = list[k];
                    if (item === oldItem) {
                        list.splice(k + 1, 0, newItem);
                        break;
                    }
                }
                break;
            case 'Renew':
                let itemMove = info[1];
                for (let l = 0; l < list.length; l++) {
                    let item = list[l];
                    if (item === itemMove) {
                        list.splice(l, 1);
                        list.push(itemMove);
                        break;
                    }
                }
        }
    }
}
inventory(['Iron, Wood, Sword, Gold', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
