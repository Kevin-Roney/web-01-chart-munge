// import functions and grab DOM elements
import { customers } from './data.js';
import { makePurchaseFrequencyCountMap } from './data-utils.js';
// let state
const countMap = makePurchaseFrequencyCountMap(customers);
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const labels = Object.keys(countMap);

const data = {
    labels: labels,
    datasets: [{
        label: 'Customers By Purchase Frequency',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(countMap),
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config
);


