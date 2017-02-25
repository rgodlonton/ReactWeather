function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('a and b must be numbers')
        }
    });
}

addPromise(2, 3).then(function(result) {
    console.log('a + b =', result);
}, function(err) {
    console.log('Error: ', err)
});
