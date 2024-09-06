let num1 =135;
let num2 = 153;
let num3 = 168;
let num4 = 173;
let num5 = 183;

console.log("Number : "+num1);

// Sum of digits
let sumOfDigits1 = 0;
let numStr1 = num1.toString();
for (let i = 0; i < numStr1.length; i++) {
  sumOfDigits1 += parseInt(numStr1[i]);
}
console.log("Sum of its digits:"+sumOfDigits1);
 
// Check if Armstrong number
let sumOfCubes1 = 0;
for (let i = 0; i <numStr1.length; i++){
    let digits1 = parseInt(numStr1[i]);
    sumOfCubes1 += Math.pow(digits1, 3);
}
if (sumOfCubes1 === num1) {
    console.log("Is it an Armstrong number? Yes");
}
else{
console.log("Is it an Armstrong number? No");
}

 // Check if prime
let isPrime1 = "Yes";
if (num1<= 1) {
    isPrime1 = "NO";
} else {
    for (let i = 2; i <= Math.sqrt(num1); i++) {
        if (num1 % i === 0) {
            isPrime1 = "No";
            break;
        }
    }
}
console.log("It is a prime number? " + isPrime1);

// Print all factors
let factors1 = "";
for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
        factors1 += i + " ";
    }
}
console.log("Factors: " + factors1);

// Second Variables

console.log("Number : "+num2);
// Sum of digits

let sumOfDigits2 = 0;
let numStr2 = num2.toString();
for (let i = 0; i < numStr2.length; i++) {
  sumOfDigits2 += parseInt(numStr2[i]);
}
console.log("Sum of its digits:"+sumOfDigits2);
 
// Check if Armstrong number
let sumOfCubes2 = 0;
for (let i = 0; i <numStr2.length; i++){
    let digits2 = parseInt(numStr2[i]);
    sumOfCubes2 += Math.pow(digits2, 3);
}

if (sumOfCubes2 === num2) {
    console.log("Is it an Armstrong number? Yes");
}
else{
console.log("Is it an Armstrong number? No");
}

 // Check if prime
let isPrime2 = "Yes";
if (num1<= 1) {
    isPrime2 = "NO";
} else {
    for (let i = 2; i <= Math.sqrt(num1); i++) {
        if (num1 % i === 0) {
            isPrime2 = "No";
            break;
        }
    }
}
console.log("It is a prime number? " + isPrime2);

// Print all factors
let factors2 = "";
for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
        factors2 += i + " ";
    }
}
console.log("Factors: " + factors2);
 
// Third Variables

console.log("Number : "+num3);
// Sum of digits
let sumOfDigits3 = 0;
let numStr3 = num3.toString();
for (let i = 0; i < numStr3.length; i++) {
  sumOfDigits3 += parseInt(numStr3[i]);
}
console.log("Sum of its digits:"+sumOfDigits3);

// Check if Armstrong number
let sumOfCubes3 = 0;
let digits3 = numStr3;
for (let i = 0; i < digits3.length; i++){
    sumOfCubes3 += Math.pow(parseInt(digits3, 3));
}

if (sumOfCubes3 === num3) {
    console.log("Is it an Armstrong number? Yes");
}

else{
    console.log("Is it an Armstrong number? No");
}
 // Check if prime
 let isPrime3 = "Yes";
if (num3<= 1) {
    isPrime3 = "NO";
} else {
    for (let i = 2; i <= Math.sqrt(num3); i++) {
        if (num3 % i === 0) {
            isPrime3 = "No";
            break;
        }
    }
}
console.log("It is a prime number? " + isPrime3);

// Print all factors
let factors3 = "";
for (let i = 1; i <= num3; i++) {
    if (num3 % i === 0) {
        factors3 += i + " ";
    }
}
console.log("Factors: " + factors3);

// Fourth Variables

console.log("Number : "+num4);
// Sum of digits
let sumOfDigits4 = 0;
let numStr4 = num4.toString();
for (let i = 0; i < numStr4.length; i++) {
  sumOfDigits4 += parseInt(numStr4[i]);
}
console.log("Sum of its digits:"+sumOfDigits4);

// Check if Armstrong number
let sumOfCubes4 = 0;
let digits4 = numStr4;
for (let i = 0; i < digits4.length; i++){
    sumOfCubes4 += Math.pow(parseInt(digits4), 3);
}

if (sumOfCubes4 === num4) {
    console.log("Is it an Armstrong number? Yes");
}

else{
    console.log("Is it an Armstrong number? No");
}

 // Check if prime
    let isPrime4 = "Yes";
if (num4<= 1) {
    isPrime4 = "NO";
} else {
    for (let i = 2; i <= Math.sqrt(num4); i++) {
        if (num4 % i === 0) {
            isPrime4 = "No";
            break;
        }
    }
}
console.log("It is a prime number? " + isPrime4);

// Print all factors
let factors4 = "";
for (let i = 1; i <= num4; i++) {
    if (num4 % i === 0) {
        factors4 += i + " ";
    }
}
console.log("Factors: " + factors4);

// Fifth Variables

console.log("Number : "+num5);
// Sum of digits
let sumOfDigits5 = 0;
let numStr5 = num5.toString();
for (let i = 0; i < numStr5.length; i++) {
  sumOfDigits5 += parseInt(numStr5[i]);
}
console.log("Sum of its digits:"+sumOfDigits5);

// Check if Armstrong number
let sumOfCubes5 = 0;
let digits5 = numStr5;
for (let i = 0; i < digits5.length; i++){
    sumOfCubes5 += Math.pow(parseInt(digits5), 3);
}

if (sumOfCubes5 === num5) {
    console.log("Is it an Armstrong number? Yes");
}

else{
    console.log("Is it an Armstrong number?No");
}

 // Check if prime
 let isPrime5 = "Yes";
if (num5<= 1) {
    isPrime5 = "NO";
} else {
    for (let i = 2; i <= Math.sqrt(num5); i++) {
        if (num5 % i === 0) {
            isPrime5 = "No";
            break;
        }
    }
}
console.log("It is a prime number? " + isPrime5);

// Print all factors
let factors5 = "";
for (let i = 1; i <= num5; i++) {
    if (num5 % i === 0) {
        factors5 += i + " ";
    }
}
console.log("Factors: " + factors5);

