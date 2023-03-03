function filterEmployees(...data) {

    let [k, v] = data.pop().split('-');
    let criteria = {};
    criteria[k] = v;
    let input = JSON.parse(data);
    let counter = 0;
    for (let info of input) {
        if (info[k] === criteria[k]) {
            console.log(`${counter}. ${info['first_name']} ${info['last_name']} - ${info['email']}`);
            counter++;
        }
    }
}
filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson')
