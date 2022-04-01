// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { makePurchaseFrequencyCountMap } from '../data-utils.js';
import { customers } from '../data.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('takes in customer data and returns a purchase frequency', (expect) => {
    const expected = {
        Often: 126,
        Once: 107,
        Daily: 142,
        Yearly: 128,
        Monthly: 123,
        Weekly: 122,
        Seldom: 129,
        Never: 123
    };

    const actual = makePurchaseFrequencyCountMap(customers);
    expect.deepEqual(actual, expected);
});