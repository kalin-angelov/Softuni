function worldTour(input) {

   let destination = input.shift();
   for (let commandInfo of input) {
        let info = commandInfo.split(':');
        let command = info[0];
        if (commandInfo === 'Travel') {
            break;
        }
        switch (command) {
            case 'Add Stop':
                let index = Number(info[1]);
                let string = info[2];
                if (destination[index]) {
                    let firstPart = destination.slice(0,index);
                    let lastPart = destination.slice(index,);
                    destination = firstPart + string + lastPart;
                }
                console.log(destination);
                break;
            case 'Remove Stop':
                let startIndex = Number(info[1]);
                let endIndex = Number(info[2]);
                if (destination[startIndex] && destination[endIndex]) {
                    let string = destination.slice(startIndex, endIndex + 1);
                    destination = destination.replace(string, '');
                }
                console.log(destination);
                break;
            case 'Switch':
                let oldString = info[1];
                let newString = info[2];
                let pattern = new RegExp(oldString, 'g');
                destination = destination.replace(pattern, newString);
                console.log(destination);
                break;
        }
    }
    console.log(`Ready for world tour! Planned stops: ${destination}`);
}
worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);
