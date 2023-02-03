function solve() {
  
  let textInput = document.getElementById('input').value;
  let sentences = textInput.split('.').filter((x) => x.length > 0);
  let element = document.getElementById('output');
  element.innerHTML = '';
  
  for (let i = 0; i < sentences.length; i += 3) {
    let result =[];
    for (let k = 0; k < 3; k++) {
      if (sentences[i + k]) {
        result.push(sentences[i + k]);
      }
    }
    let text = result.join('.') + '.';
    element.innerHTML += `<p>${text}</p>`;
  }
}
