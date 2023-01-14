function gladiatorInventory(array) {

    let equipment = array.shift().split(' ');
    for (let el of array) {
        let command = el.split(' ');
        let action = command[0];
        let item = command[1];
        let itemUp;
        if (item.includes('-')) {
            item = String(item).replace('-',' ').split(' ');
            itemUp = `${item[0]}:${item[1]}`
        }
        switch (action) {
            case 'Buy':
                if(!equipment.includes(item)) {
                    equipment.push(item);
                    break;
                }
            case 'Trash':
                if (equipment.includes(item)) {
                    let index = equipment.indexOf(item);
                    equipment.splice(index,1);
                    break;
                }
            case 'Repair':
                if (equipment.includes(item)) {
                    let index = equipment.indexOf(item);
                    let repair = String(equipment.splice(index,1));
                    equipment.push(repair);
                    break;
                }
            case 'Upgrade':
                if (equipment.includes(item[0])) {
                    let index = equipment.indexOf(item[0]);
                    equipment.splice(index + 1, 0, itemUp);
                }
                break;
                
        }
    }
    console.log(equipment.join(' '));
}
gladiatorInventory(['SWORD Shield Spear Helmet','Trash Bow','Repair Shield','Upgrade Helmet-V'])
