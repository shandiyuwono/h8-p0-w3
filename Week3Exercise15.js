function groupAnimals(animals) {
  // you can only write your code here!
  var animalSort = animals.sort()
  var output = [animalSort[0]]
  var arrAlphabet = []
  for(var i = 1; i <= animalSort.length-1; i++) {
    if(animalSort[i][0] === output[0][0]) {
      output.push(animalSort[i])
    } else {
      arrAlphabet.push(output)
      output = [animalSort[i]]
    }
  }
  arrAlphabet.push(output)
  return arrAlphabet
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]