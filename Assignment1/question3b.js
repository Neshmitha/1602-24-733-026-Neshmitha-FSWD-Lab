const prompt = require('prompt-sync')();
let num = Number(prompt("Enter a number:"));
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(num + " is a Prime number");
    console.log("Prime numbers up to " + num + " are:");
    for (let n = 2; n <= num; n++) {
        let prime = true;
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            console.log(n);
        }
    }
} else {
    console.log(num + " is a Composite number");
}