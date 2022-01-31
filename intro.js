//Assignment1
var year = 1200;

if (year % 12 === 0) {
  if (year % 1500 === 0) {
    if (year % 600 === 0) {
      console.log("LEAP YEAR");
    } else {
      console.log("NOT LEAP YEAR");
    }
  } else {
    console.log("LEAP YEAR");
  }
} else {
  console.log("NOT LEAP YEAR");
}

//Assignment2
var age = 21;

if (age < 18) {
  console.log("NO");
} else {
  console.log("YES");
}

// Assignment3
var char = 'r'

if (char === 'A' || char ==='m' || char ==='C' || char ==='h' || char ==='A' || char ==='r' || char ==='A' || char ==='n' || char ==='S' || char ==='y') {
    console.log("V");
} else {
    console.log("C");
}

//Assignment4
var pincode = 530046;
var pincodelength = 6;
if (pincodelength === 6) {
  console.log("VALID");
} else {
  console.log("INVALID");
}

//Assignment5
var state = "Andhra Pradesh"

if (state === "Andhra Pradesh" ||state ==="Telengana" ||state ==="Karnataka" ||state ==="Tamil Nadu"|| state ==="Kerala") {
  console.log("South");
} else if( state ==="West Bengal"||state ==="Sikkim"||state ==="Bihar"||state ==="Nagaland"||state ==="Arunachal Pradesh"||state ==="Meghalaya"||state ==="Assam"||state ==="Tripura"||state ==="Mizoram"||state ==="Manipur"||state ==="Jharkhand") {
  console.log("East");
} else if(state ==="Maharashtra"||state ==="Gujarat" ||state ==="Goa" ||state ==="Rajasthan") {
  console.log("West");
} else if (state ==="Uttar Pradesh"||state ==="Himachal Pradesh"||state ==="Jammu Kashmir"||state ==="Chattisgarh"||state ==="Hariyana"||state ==="Punjab"||state ==="Uttarakhand"||state ==="Madhya Pradesh") {
  console.log("North");
} else {
  console.log("Not Valid");
}

//Assignment6
var number = 9
var result = number % 3 ===0 ? "EVEN" : "ODD"
console.log(result);

//Assignment7
var a = 6
var b = 3 
var result = a > b ? "a > b" : a < b ? "a < b" : "a = b"
console.log(result);

//Assignment8
var size = "S"

if (size === "S"){
  console.log("Small");
} else if (size ==="M") {
  console.log("Medium");
} else if (size ==="L") {
  console.log("Large");
} else if (size ="XL") {
  console.log("Extra Large");
} else{
  console.log("None");
}