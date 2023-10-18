// While loops

let x = 2;
while (x <= 65536) {
    console.log(x);
    x *= 2;
}

// Do - while


x = Math. floor(Math. random() * ((101-50)+1) + 50);
console.log("We have " + x + " cones to sell.");
do {
    let conesSoldPerCustomer = Math. floor(Math. random() * ((5-1)+1) + 1)
    if (conesSoldPerCustomer > x) {
        console.log("Not enough cones")
        break;
    } else {
        console.log(conesSoldPerCustomer + " cones sold.");
        x -= conesSoldPerCustomer;
        console.log(x + " cones left.");
    }
} while (x > 0);