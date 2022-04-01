/* eslint-disable no-undef */
import { makeCoolFactorCountMap } from './data-utils.js';
import { customers } from './data.js';

const countMap = makeCoolFactorCountMap(customers);

const labels = Object.keys(countMap);

const data = {
    labels: labels,
    datasets: [{
        label: 'Customers By Purchase Frequency',
        backgroundColor: 'red',
        borderColor: 'black',
        data: Object.values(countMap),
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};
// eslint-disable-next-line
const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config
);