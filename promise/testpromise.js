
let doFirst = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("first done");
            resolve("done");
        }, 2000);
    });
}

let doSecond = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("second done");
            resolve("done");
        }, 1000);
    });
}

let doThird = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("third done");
            resolve("done");
            //reject(new Error("Error 3"));
        }, 500);
    });
}

let doFourth = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("FOURTH done");
            resolve("done");
        }, 1000);
    });
}

doFirst()
.then(doSecond)
.then(doThird)
.then(doFourth)
.catch((error) => {
    console.log("Error occured: ");
    console.log(error);
});


