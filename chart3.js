/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { makeGenderCountMap } from './data-utils.js';
import { customers } from './data.js';

const countMap = makeGenderCountMap(customers);

const labels = Object.keys(countMap);

const data = {
    labels: labels,
    datasets: [{
        label: 'Customers By Purchase Frequency',
        backgroundColor: ['red', 'green', 'purple', 'pink', 'orange', 'yellow', 'blue', 'teal'],
        borderColor: 'black',
        data: Object.values(countMap),
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {}
};

const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config
);