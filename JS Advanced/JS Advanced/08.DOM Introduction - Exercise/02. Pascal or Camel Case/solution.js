function solve() {
  
  let text = document.getElementById('text').value.split(' ');
  let convert = document.getElementById('naming-convention').value;

  let buffer = '';

  switch (convert) {
    case "Camel Case":
      for (let word of text) {
        if (text[0] === word) {
          word = word.toLowerCase();
          buffer += word;
        } else {
          word = word[0].toUpperCase() + word.substring(1).toLowerCase();
          buffer += word;
        }
      }
      document.getElementById('result'). textContent = buffer;
      break;

    case "Pascal Case":
      for (let word of text) {
        word = word[0].toUpperCase() + word.substring(1).toLowerCase();
        buffer += word
      }
      document.getElementById('result'). textContent = buffer;
      break;

    default:
    document.getElementById('result'). textContent = 'Error!';
      break;
  }
  
}
