// // ამოცანა 1
// let user = {
//     FirstName: "giorgi",
//     LastName: "smith",
//     Age: 25,
//     StudentStatus: "active"
// };

// // console.log(user.StudentStatus);
// console.log(user["StudentStatus"]);

// // ამოცანა 2

// let names = ["mariami", 28, "kato", 8, "ana", 17, "elene", 6];

// // for (let i = 0; i < names.length; i++) {
// //     console.log(names[i]);
// // };
// for (let item of names) {
//     console.log(item);
// };

// // ამოცანა 3

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// // for (let i = 0; i < numbers.length; i++) {
// //     if (numbers[i] > 5) {
// //         console.log(numbers[i]);
// //     }
// // }

// for (let element of numbers) {
//     if (element > 5) {
//         console.log(element);
//     }
// };

// ამოცანა 4 ---- არ ასრულებს მოქმედებას
// let giorgi = {
//     Name: "giorgi",
//     Age: 20,
//     StudentStatus: "active"
// }
// if (giorgi.Age < 18) {
//     console.log(hello);
// } else if (giorgi.Name == "levani") {
//     console.log("hello levan");
// } else if (giorgi.Age < 25 && giorgi.StudentStatus == "active"){
//     console.log("hello world")
// } else {
//     console.log("error");
// }






// // ამოცანა 5
// let fruts = ['watermelon', 'pear', 10, 45, 50, "banana", 'ananas']
// for (let item of fruts) {
//     if (typeof item === "string")
//         console.log(item);
// };


// // ამოცანა 6 - ?????
// let massive = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]];
// for (let item of massive) {
//     for (let n of item) {
//         if (n > 0) {
//             console.log(n);
//         }
//     }
// }

// // ამოცანა 7

// let Array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
// for (let element of Array) {
//     if (element % 2 == 0)
//         console.log(element);
// };
// for (let element of Array) {
//     if (element % 2 == 1)
//         console.log(element);
// };

// ამოცანა 8
// let users = [
//     { username: 'giorgi', status: false },
//     { username: 'levani', status: false },
//     { username: 'anna', status: true }
// ]
// for (let item of users) {
//     if (item.status == true) {
//         console.log(item.username);
//     }
// }