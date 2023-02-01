function extractText() {
    let itemsList = document.querySelectorAll('#items li');
    let result = '';

    for (let item of itemsList) {
        result += item.textContent.trim() + '\n';
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = result.trim();
};
