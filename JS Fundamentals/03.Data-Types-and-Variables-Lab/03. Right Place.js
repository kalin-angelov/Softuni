function rightPlace(underScopeWord, character, word) {

   let adjustment = underScopeWord.replace('_', character);
   let result = adjustment === word ? 'Matched' : 'Not Matched';

   console.log(result)

}
rightPlace('Str_ng', 'I', 'Strong')
