

// slowMath.add(1, 1).then((result) => {
//     console.log(result);
//     return slowMath.multiply(result, 2);
// })
// .then((result) => {
//     console.log(result);
//     return slowMath.divide(result, 4);
// })
// .then((result) => {
//     console.log(result);
//     return slowMath.subtract(result, 3);
// })
// .then((result) => {
//     console.log(result);
//     return slowMath.add(result, 98);
// })
// .then((result) => {
//     console.log(result);
//     return slowMath.remainder(result, 2);
// })
// .then((result) => {
//     console.log(result);
//     return slowMath.multiply(result, 50);
// })
// .then((result) => {
//     console.log(result);
//     return slowMath.remainder(result, 40);
// })
// .then((result) => {
//     console.log(result);
//     return slowMath.add(result, 32);
// })
// .then(result => {
//     console.log(`The final result is ${result}.`);
// })
// .catch(err => {
//     console.log(err);
// });

async function doMath(x, y) {
    try {
        let response = await slowMath.add(x, y);
        let response2 = await slowMath.multiply(response, 2);
        let response3 = await slowMath.divide(response2, 4);
        let response4 = await slowMath.subtract(response3, 3);
        let response5 = await slowMath.add(response4, 98);
        let response6 = await slowMath.remainder(response5, 2);
        let response7 = await slowMath.multiply(response6, 50);
        let response8 = await slowMath.remainder(response7, 40);
        let response9 = await slowMath.add(response8, 32);

        console.log(`The final result is ${response9}.`);

    } catch (err) {
        console.log(err);
    }

}

doMath(6, 2);