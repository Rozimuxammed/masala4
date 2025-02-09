// 10 DAN 100 GACHA BO'LGAN SONLARNING 2GA BO'LINADIGANLARINI VA 3GA BO'LINADIGANLARINI CHIQARUVCHI DASTUR YOZING.

// for (let i = 10; i <= 100; i++) {
//     if (i % 2 == 0 && i % 3 == 0) {
//         console.log(i);
//     }

// }

// 20 DAN 50 GACHA BO'LGAN SONLARNING FAQAT 5GA BO'LINADIGANLARINI CHIQARUVCHI DASTUR YOZING.

// for (let i = 20; i <= 50; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }

// 1 DAN 100 GACHA BO'LGAN SONLARNING KVADRATLARINING YIG'INDISINI HISOBLANG.

// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     sum += i ** 2
// }
// console.log(sum);

// 1 DAN 50 GACHA BO'LGAN SONLARNING KUBIKLARINI CHIQARUVCHI DASTUR YOZING.

// for (let i = 1; i <= 50; i++) {
//     console.log(i ** 3);
// }

// 10 DAN 100 GACHA BO'LGAN SONLARNING JUFT YOKI TOQLIGINI TEKSHIRIB, IKKISINI AJRATIB KO'RSATING.

// for (let i = 10; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(`Juft son ${i}`);
//     } else {
//         console.log(`Toq son ${i}`);
//     }
// }

// 5 DAN 100 GACHA BO'LGAN BARCHA SONLARNING YIG'INDISINI HISOBLANG, LEKIN 7GA BO'LINADIGANLARNI HISOBLASHDAN CHETLANG.

// let sum = 0
// for (let i = 5; i <= 100; i++) {
//     if (i % 7 != 0) {
//         sum += i
//     }
// }
// console.log(sum);

// 50 DAN 150 GACHA BO'LGAN SONLARNING FAQAT JUFTLARINI CHIQARUVCHI DASTUR YOZING.

// for (let i = 50; i <= 150; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// 1 DAN 100 GACHA BO'LGAN SONLARNING KO'PAYTMALARINI TOPING VA 10000DAN KICHIK BO'LSA, NATIJANI EKRANGA CHIQARUVCHI DASTUR YOZING.

// let sum = 1
// for (let i = 1; i <= 100; i++) {
//     sum *= i
// }
// if (sum < 10000) {
//     console.log(sum);
// } else {
//     console.log("Natija 10000 dan katta");
// }

// 1 DAN 100 GACHA BO'LGAN SONLARNING 6GA BO'LINADIGANLARINI EKRANGA CHIQARUVCHI DASTUR YOZING.

// for (let i = 1; i <= 100; i++) {
//     if (i % 6 == 0) {
//         console.log(i);
//     }
// }

// 1 DAN 50 GACHA BO'LGAN SONLAR UCHUN ULAR JUFTMI YOKI TOQMI EKANLIGINI ANIQLAB CHIQARUVCHI DASTUR YOZING.

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(`Juft son ${i}`);
//     } else {
//         console.log(`Toq son ${i}`);
//     }
// }

// 1 DAN 1000 GACHA BO'LGAN SONLAR ORASIDA FAQAT 4, 5 VA 7GA BO'LINADIGAN SONLARNI TOPING VA ULARNING YIG'INDISINI HISOBLANG.

// let sum = 0
// for (let i = 1; i <= 1000; i++) {
//     if (i % 4 == 0 && i % 5 == 0 && i % 7 == 0) {
//         sum += i
//     }
// }
// console.log(sum);

// 1 DAN 10000 GACHA BO'LGAN SONLAR ORASIDA FAQAT 6GA BO'LINADIGAN VA 8GA BO'LINMAYDIGAN SONLARNI CHIQARIB, ULARNING KVADRATLARINI YIG'INDISINI HISOBLANG.

// let sum = 0
// for (let i = 1; i <= 10000; i++) {
//     if (i % 6 == 0 && i % 8 != 0) {
//         sum += i ** 2
//     }
// }
// console.log(sum);

// 100 DAN 2000 GACHA BO'LGAN SONLAR ORASIDA FAQAT 9GA BO'LINADIGAN VA 5GA BO'LINADIGAN SONLARNI CHIQARIB, ULARNING YIG'INDISINI HISOBLANG.

// let sum = 0
// for (let i = 100; i <= 2000; i++) {
//     if (i % 9 == 0 && i % 5 == 0) {
//         sum += i
//     }
// }
// console.log(sum);

// 1 DAN 1000 GACHA BO'LGAN SONLAR ORASIDA FAQAT 2GA, 3GA VA 5GA BO'LINADIGAN SONLARNI TOPING VA ULARNING KUBIKLARINI HISOBLANG.

// let sum = 0
// for (let i = 1; i <= 1000; i++) {
//     if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
//         sum += i ** 3
//     }
// }
// console.log(sum);

// 1 DAN 10000 GACHA BO'LGAN SONLAR ORASIDA 3GA BO'LINADIGAN, 4GA BO'LINADIGAN VA 5GA BO'LINMAYDIGAN SONLARNING YIG'INDISINI HISOBLANG.

// let sum = 0
// for (let i = 1; i <= 10000; i++) {
//     if (i % 3 == 0 && i % 4 == 0 && i % 5 != 0) {
//         sum += i
//     }
// }
// console.log(sum);

// 100 DAN 10000 GACHA BO'LGAN SONLAR ORASIDA FAQAT 2GA BO'LINADIGAN VA 6GA BO'LINMAYDIGAN SONLARNI CHIQARIB, ULARNING KUBIKLARINI HISOBLANG.

// let sum = 0
// for (let i = 100; i <= 10000; i++) {
//     if (i % 2 == 0 && i % 6 != 0) {
//         sum += i ** 3
//     }
// }
// console.log(sum);

// 1 DAN 10000 GACHA BO'LGAN SONLAR ORASIDA 3GA BO'LINADIGAN, 7GA BO'LINADIGAN VA 10GA BO'LINMAYDIGAN SONLARNI AJRATING VA ULARNING KVADRATLARINI HISOBLANG.

// let sum = 0
// for (let i = 1; i <= 10000; i++) {
//     if (i % 3 == 0 && i % 7 == 0 && i % 10 != 0) {
//         sum += i ** 2
//     }
// }
// console.log(sum);

// 1 DAN 10000 GACHA BO'LGAN SONLAR ORASIDA FAQAT 3GA BO'LINADIGAN VA 6GA BO'LINADIGAN SONLARNING YIG'INDISINI HISOBLANG, LEKIN 2000DAN KATTA BO'LSA, "KATTA" DEB CHIQARING.

// let sum = 0
// for (let i = 1; i <= 10000; i++) {
//     if (i % 3 == 0 && i % 6 == 0) {
//         sum += i
//     }
// }
// if (sum > 2000) {
//     console.log("KATTA");
// } else {
//     console.log("KICHIK");
// }

// 1 DAN 10000 GACHA BO'LGAN SONLARDAN FAQAT 4, 5, VA 8GA BO'LINADIGAN SONLARNI CHIQARIB, ULARNING KO'PAYTMASINI HISOBLANG.

// let sum = 1
// for (let i = 1; i <= 10000; i++) {
//     if (i % 4 == 0 && i % 5 == 0 && i % 8 == 0) {        
//         sum *= i
//     }
// }
// console.log(sum);

// 1 DAN 10000 GACHA BO'LGAN SONLARDAN FAQAT 2GA, 3GA, VA 6GA BO'LINADIGAN SONLARNI TOPING VA ULARNING KVADRATLARINI HISOBLANG.

// let sum = 0
// for (let i = 1; i <= 10000; i++) {
//     if (i % 2 == 0 && i % 3 == 0 && i % 6 == 0) {
//         sum += i ** 2
//     }
// }
// console.log(sum);

// 1 DAN 10000 GACHA BO'LGAN SONLARDAN FAQAT 4GA BO'LINADIGANLARNI CHIQARIB, ULARNING YIG'INDISINI HISOBLANG VA NATIJANI 10000DAN KICHIK BO'LSA, EKRANGA CHIQARISH.

// let sum = 0
// for (let i = 1; i <= 10000; i++) {
//     if (i % 4 == 0) {
//         sum += i
//     }
// }
// if (sum < 10000) {
//     console.log(sum);
// }

// 1 DAN 5000 GACHA BO'LGAN SONLAR ORASIDA FAQAT 9GA BO'LINADIGAN, 5GA BO'LINADIGAN VA 7GA BO'LINMAYDIGAN SONLARNI CHIQARIB, ULARNING KO'PAYTMASINI HISOBLANG.

// let sum = 1
// for (let i = 1; i <= 5000; i++) {
//     if (i % 5 == 0 && i % 7 != 0 && i % 9 == 0) {
//         sum *= i
//     }
// }
// console.log(sum);

// 1 DAN 5000 GACHA BO'LGAN SONLARDAN FAQAT 2GA, 3GA VA 4GA BO'LINADIGAN SONLARNI TOPING VA ULARNING YIG'INDISINI HISOBLANG, 10000DAN KATTA BO'LSA, "BOSHQA" DEB CHIQARING.

// let sum = 0
// for (let i = 1; i <= 5000; i++) {
//     if (i % 2 == 0 && i % 3 == 0 && i % 4 == 0) {
//         sum += i
//     }
// }
// if (sum > 10000) {
//     console.log("BOSHQA");
// }
// else {
//     console.log(sum);
// }

// 1 DAN 10000 GACHA BO'LGAN SONLAR ORASIDA 7GA BO'LINADIGAN, 6GA BO'LINADIGAN VA 10GA BO'LINMAYDIGAN SONLARNI CHIQARIB, ULARNING KVADRATLARINI HISOBLANG.

// let sum = 0
// for (let i = 1; i <= 10000; i++) {
//     if (i % 6 == 0 && i % 7 == 0 && i % 10 != 0) {
//         sum += i ** 2
//     }
// }
// console.log(sum);

// 1 DAN 5000 GACHA BO'LGAN SONLAR ORASIDA FAQAT 3GA, 4GA VA 6GA BO'LINADIGAN SONLARNI AJRATING VA ULARNING KUBIKLARINI HISOBLANG.

// let sum = 0
// for (let i = 1; i <= 5000; i++) {
//     if (i % 3 == 0 && i % 4 == 0 && i % 6 == 0) {
//         sum += i ** 3
//     }
// }
// console.log(sum);