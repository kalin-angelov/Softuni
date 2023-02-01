function editElement(ref, match, replacer) {
    let text = ref.textContent;
    let isMatch = new RegExp(match, 'g');
    let result = text.replace(isMatch, replacer);
    ref.textContent = result;
};
