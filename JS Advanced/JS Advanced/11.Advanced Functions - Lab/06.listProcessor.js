function listProcessor (input) {

    let result = [];

    for (let info of input) {
        let [command, str] = info.split(' ');
        
        switch (command) {
            case 'add': 
                result.push(str);
                break;
            case 'remove':
                while(result.includes(str)) {
                    let index = result.indexOf(str);
                    result.splice(index,1);
                }
                break;
            case 'print':
                console.log(result.join(','));
                break;
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
