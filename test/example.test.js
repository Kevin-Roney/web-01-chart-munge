// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { makePurchaseFrequencyCountMap, makeCoolFactorCountMap, makeGenderCountMap } from '../data-utils.js';
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

test('takes in customer data and returns a cool factor count', (expect) => {
    const expected = {
        1: 109,
        2: 119,
        3: 99,
        4: 101,
        5: 93,
        6: 102,
        7: 101,
        8: 99,
        9: 82,
        10: 95
    };

    const actual = makeCoolFactorCountMap(customers);
    expect.deepEqual(actual, expected);
});

test('takes in customer data and returns a gender count', (expect) => {
    const expected = {
        Male: 448,
        Female: 457,
        Bigender: 14,
        Agender: 17,
        'Non-binary': 24,
        Genderqueer: 11,
        Genderfluid: 18,
        Polygender: 11
    };

    const actual = makeGenderCountMap(customers);
    expect.deepEqual(actual, expected);
});