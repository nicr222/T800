/* unit function */ 

QUnit.test('isEven()', function(assert) {
    assert.ok(isEven(0), 'Zero is an even number');
    assert.ok(isEven(2), 'So is two');
    assert.ok(isEven(-4), 'So is negative four');
    assert.ok(!isEven(1), 'One is not an even number');
    assert.ok(!isEven(-7), 'Neither is negative seven');  
    
    assert.equal(isEven(2),true,"that's an even number");
    
    assert.equal(isEven(3),0,"this should error");
})


QUnit.test('addNumbers()', function(assert) {
           assert.equal(addNumbers(3,5), 8, "Eight is great!");
           assert.equal(addNumbers(1,"s"),"error", "Yep, cannot add those");
           assert.equal(addNumbers(10,45),55,"Getting it right is fun");
})


/* unit function */
function isEven(val) {
    return val % 2 === 0;
}

function addNumbers(val1, val2){
    
    if((!isNaN(val1)) && (!isNaN(val2)))
        return val1 + val2;
    else
        return "error";
    
}


/* NIC */
QUnit.test('cart is correct', function(assert){
    assert.equal(updateCartSubTotal(21, 24, 35, 32, 111), 223,'Subcart is updated');
    assert.equal(updateCartSubTotal(12.99, 27.99, 58.35, 99.97, 111.99), 311.29,'Subcart is updated');
    assert.equal(updateCartSubTotal(38, 5.99, 7.99, 289.99, .99), 342.96,'Subcart is updated');
    assert.equal(updateCartSubTotal(89.99, 74.99, 87.99, 1.95, 180.95), 435.87,'Subcart is updated');
})

function updateCartSubTotal(x, y, z, a, b) {
    var total = 0;
    total = Number(x) + Number(y) + Number(z) + Number(a) + Number(b)
    total = Math.round(total * 100) / 100
    return total;
}

QUnit.test('correctly adds array', function(assert){
    const numbers1 = [1, 2, 3];
    const expected1 = 6;
    const result1 = AddArrayOfNumbers(numbers1);
    assert.equal(result1, expected1, "Equals expected")

});

// Returns the sum of an array of numbers passed-in.
function AddArrayOfNumbers(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input is not an array');
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
}


QUnit.test('temp is fahrenheit', function(assert){
    assert.equal(convertCelciusToFahrenheit(23), 73.4,'Fahrenheit correct');
    assert.equal(convertCelciusToFahrenheit("23"), "73.4",'Fahrenheit is string');
    assert.equal(convertCelciusToFahrenheit(0), 32,'Fahrenheit correct');
    
    assert.equal(!convertCelciusToFahrenheit(0), false,'Fahrenheit is wrong');
    
})

QUnit.test('temp is celcius', function(assert){
    assert.equal(convertFahrenheitToCelcius(73.4), 23,'Fahrenheit correct');
    assert.equal(convertFahrenheitToCelcius("73.4"), "23",'celcius is string');
    assert.equal(convertFahrenheitToCelcius(32), 0,'Is cold');
    
    assert.equal(!ConvertCelciusToFahrenheit(0), false,'celcius is wrong');
    
})



 QUnit.test("correctly converts", function(assert){
    const temp = 0;
    const expected = 32;
    const actual = ConvertCelciusToFahrenheit(temp);
    assert.equal(expected, actual, "correctly converts");
 });

 QUnit.test("sends correct error", function(assert){
    const temp = "ten";
    const expected = "Must be a number written as in (10)";
    const actual = ConvertCelciusToFahrenheit(temp);
    assert.equal(expected, actual, "sends correct error message.");
 });

QUnit.test("return that is whole number", function(assert){
    const number = 9;
    const expected = true;
    const actual = TestIfSquareRootIsWholeNumber(number);
    assert.equal(expected, actual, "Correctly confirms it is whole number");
});

QUnit.test("return false that is not a whole number", function(assert){
    const number = 5;
    const expected = false;
    const actual = TestIfSquareRootIsWholeNumber(number);
    assert.equal(expected, actual, "Returns false when not whole number");
});

QUnit.test("return sentence", function(assert){
    const words = ["I", "Like", "Psyduck"];
    const expected = "I Like Psyduck";
    const actual = ConcatArrayOfWords(words);
    assert.equal(expected, actual, "Return sentence");
});

