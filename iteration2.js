const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let longest = param[0]
    param.forEach((av) => {
        let longitudMasLargo = longest.length 
        let longitudValorActual = av.length
        if (longitudValorActual > longitudMasLargo) {
            longest = av
        }
      })
      return longest
  }
let resultado = findLongestWord(avengers)
console.log(resultado)