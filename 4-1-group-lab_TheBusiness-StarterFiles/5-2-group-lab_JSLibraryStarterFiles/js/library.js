// Takes an array of words, and concatenates them together to form a sentence.
function ConcatArrayOfWords(words) {
    if (!Array.isArray(words)) {
        return 'Input is not an array';
      }
    const sentence = words.join(" ");
      return sentence;
}

// Takes an array of words, reverses them, and concatenates them together to form a sentence.
function ConcatAndReverseArrayOfWords(words) {

}

// Checks to see if a word exists within a sentence.
function CheckForWordInSentence(sentence, word) {

}

// Tests if a number's square root is a whole number.
function TestIfSquareRootIsWholeNumber(number) {
    if (typeof number !== "number" || number < 0) {
        return false;
      }
    
      var sqrt = Math.sqrt(number);
      return sqrt === Math.floor(sqrt);
}

// Returns the sum of an array of numbers passed-in.
function AddArrayOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
  return sum;

}

// Gets a random whole number between 0 and the number passed in (maxNumber).
function GetRandomInteger(maxNumber) {

}


function ConvertCelciusToFahrenheit(celsius) {
    if (typeof celsius !== "number" || isNaN(celsius))
    {
        return "Must be a number written as in (10)";
    }
    var fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
  }



function convertCelciusToFahrenheit(celsius) {
    var fahrenheit;

    fahrenheit = celsius * 1.8 + 32;

    Math.round(fahrenheit);

    return fahrenheit;
}

function convertFahrenheitToCelcius(fahrenheit) {
    var answer = 0;
    var celcius;

    celcius = (fahrenheit - 32)/1.8;

    answer = Math.round(celcius);

    return answer;
}
