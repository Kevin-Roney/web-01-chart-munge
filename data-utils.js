export function makePurchaseFrequencyCountMap(customers) {
    const countMap1 = {};
    for (let customer of customers) {
        const frequency = customer.purchase_frequency;
        if (countMap1[frequency]) {
            countMap1[frequency]++;
        } else {
            countMap1[frequency] = 1;
        }
    }
    return countMap1;
}

export function makeCoolFactorCountMap(customers) {
    const countMap2 = {};
    for (let customer of customers) {
        const frequency = customer.cool_factor;
        if (countMap2[frequency]) {
            countMap2[frequency]++;
        } else {
            countMap2[frequency] = 1;
        }
    }
    return countMap2;
}

export function makeGenderCountMap(customers) {
    const countMap3 = {};
    for (let customer of customers) {
        const frequency = customer.gender;
        if (countMap3[frequency]) {
            countMap3[frequency]++;
        } else {
            countMap3[frequency] = 1;
        }
    }
    return countMap3;
}