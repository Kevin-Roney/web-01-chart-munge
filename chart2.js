import { makeCoolFactorCountMap } from './data-utils.js';
import { customers } from './data.js';

const countMap = makeCoolFactorCountMap(customers);

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
    type: 'line',
    data: data,
    options: {}
};

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config
);