QUnit.test('isEven()', function(assert) {
    assert.ok(isEven(0), 'Zero is an even number');
    assert.ok(isEven(2), 'So is two');
    assert.ok(isEven(-4), 'So is negative four');
    assert.ok(!isEven(1), 'One is not an even number');
    assert.ok(!isEven(-7), 'Neither is negative seven');  
    
    assert.equal(isEven(2),true,"that's an even number");
    
    assert.equal(isEven(3),0,"this should error");
})

/*nic*/
const chai = window.chai
const expect = chai.expect

QUnit.test('two numbers', function(assert) {
    assert.equal(add(1, 2), 3);
})