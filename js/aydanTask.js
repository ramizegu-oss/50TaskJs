// 1) m ededi gelir, eger eded 20-den boyuk ve 50-den kicikdirse,
// onu 3 defe artirin, eks halda 5 vahid azaldin.

// function task1(m){
//     if (m>20 && m<50) {
//         return m*3;
//     }
//     else{
//         return m-5;
//     }
// }

// function task1(m){
//     if (m>20 && m<50) {
//         console.log(m*3);
//     }
//     else{
//         console.log(m-5);
//     }
// }

// let task1=(m)=>{
//     if (m>20 && m<50) {
//         return m*3;
//     }
//     else{
//         return m-5;
//     }
// }

// let task1=(m)=>{
//     if (m>20 && m<50) {
//         console.log(m*3);
//     }
//     else{
//         console.log(m-5);
//     }
// }

// console.log(task1(55));
// task1(55)

// 2) a ve b ededleri gelir, her ikisi cutdurse onlarin hasilini, eks halda cemini tapin.

// function task2(a,b){
//     if (a%2==0 && b%2==0) {
//         return a*b;
//     }
//     else{
//         return a+b;
//     }
// }

// function task2(a,b){
//     if (a%2==0 && b%2==0) {
//         console.log(a*b);

//     }
//     else{
//         console.log(a+b);

//     }
// }

// let task2=(a,b)=>{
//     if (a%2==0 && b%2==0) {
//         return a*b;
//     }
//     else{
//         return a+b;
//     }
// }

// let task2=(a,b)=>{
//     if (a%2==0 && b%2==0) {
//         console.log(a*b);

//     }
//     else{
//         console.log(a+b);

//     }
// }

// console.log(task2());
// task2(14,22);

// 3) m ededi gelir, eded 5-e bolunurse kvadratini, bolunmurse kubunu hesablayin.

// function task3(m){
//     if (m%5==0) {
//         return m**2;
//     }
//     else{
//         return m**3;
//     }
// }

// function task3(m){
//     if (m%5==0) {
//         console.log(m**2);
//     }
//     else{
//         console.log(m**3);
//     }
// }

// let task3=(m)=>{
//     if (m%5==0) {
//         return m**2;
//     }
//     else{
//         return m**3;
//     }
// }

// let task3=(m)=>{
//     if (m%5==0) {
//         console.log(m**2);
//     }
//     else{
//         console.log(m**3);
//     }
// }

// console.log(task3(13));
// task3();

// 4) m ededinden 1-e qeder olan butun cut ededlerin cemini tapin.

// function task4(m){
//     let res = 0;
//     for (let i = m; i > 1; i--) {
//         if (i%2==0) {
//             res+=i
//         }
//     }
//     return res;
// }

// function task4(m){
//     let res = 0;
//     for (let i = m; i > 1; i--) {
//         if (i%2==0) {
//             res+=i
//         }
//     }
//     console.log(res);
// }

// let task4=(m)=>{
//     let res = 0;
//     for (let i = m; i > 1; i--) {
//         if (i%2==0) {
//             res+=i
//         }
//     }
//     return res;
// }

// let task4=(m)=>{
//     let res = 0;
//     for (let i = m; i > 1; i--) {
//         if (i%2==0) {
//             res+=i
//         }
//     }
//     console.log(res);
// }

// console.log(task4(10));
// task4(10)

// 5) n ve m ededleri arasinda 4-e bolunen ededlerin hasilini tapin.

// function task5(n,m){
//     let num = 1;
//     for (let i = n; i < m; i++) {
//         if (i%4==0) {
//             num*=i;
//         }
//     }
//     return num;
// }

// function task5(n,m){
//     let num = 1;
//     for (let i = n; i < m; i++) {
//         if (i%4==0) {
//             num*=i;
//         }
//     }
//     console.log(num);
// }

// let task5=(n,m)=>{
//     let num = 1;
//     for (let i = n; i < m; i++) {
//         if (i%4==0) {
//             num*=i;
//         }
//     }
//     return num;
// }

// let task5=(n,m)=>{
//     let num = 1;
//     for (let i = n; i < m; i++) {
//         if (i%4==0) {
//             num*=i;
//         }
//     }
//     console.log(num);
// }

// console.log(task5(12,20));
// task5(12,20)

// 6) a ededi gelir, onun butun bolenlerini ekrana cixarin.

// function task6(a){
//     let arr = [];
//     for (let i = 1; i <= a; i++) {
//         if (a%i==0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// function task6(a){
//     let arr = [];
//     for (let i = 1; i <= a; i++) {
//         if (a%i==0) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }

// let task6=(a)=>{
//     let arr = [];
//     for (let i = 1; i <= a; i++) {
//         if (a%i==0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// let task6=(a)=>{
//     let arr = [];
//     for (let i = 1; i <= a; i++) {
//         if (a%i==0) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }

// console.log(task6(15));
// task6(15)

// 7) m ve n arasinda 3-e bolunen ededlerin sayini tapin.

// function task7(m,n){
//     let cout = 0;
//     for (let i = m+1; i < n; i++) {
//         if (i%3==0) {
//             cout++;
//         }
//     }
//     return cout;
// }

// function task7(m,n){
//     let cout = 0;
//     for (let i = m+1; i < n; i++) {
//         if (i%3==0) {
//             cout++;
//         }
//     }
//     console.log(cout);
// }

// let task7=(m,n)=>{
//     let cout = 0;
//     for (let i = m+1; i < n; i++) {
//         if (i%3==0) {
//             cout++;
//         }
//     }
//     return cout;
// }

// let task7=(m,n)=>{
//     let cout = 0;
//     for (let i = m+1; i < n; i++) {
//         if (i%3==0) {
//             cout++;
//         }
//     }
//     console.log(cout);
// }

// console.log(task7(5,25));
// task7(5,25)

// 8) m ve n arasinda 7-ye bolunen ededlerin cemini tapin.

// function task8(m,n){
//     let sum = 0;
//     for (let i = m+1; i < n; i++) {
//         if (i%7==0) {
//             sum+=i
//         }
//     }
//     return sum
// }

// function task8(m,n){
//     let sum = 0;
//     for (let i = m+1; i < n; i++) {
//         if (i%7==0) {
//             sum+=i
//         }
//     }
//     console.log(sum);
// }

// let task8=(m,n)=>{
//     let sum = 0;
//     for (let i = m+1; i < n; i++) {
//         if (i%7==0) {
//             sum+=i
//         }
//     }
//     return sum
// }

// let task8=(m,n)=>{
//     let sum = 0;
//     for (let i = m+1; i < n; i++) {
//         if (i%7==0) {
//             sum+=i
//         }
//     }
//     console.log(sum);
// }

// console.log(task8(7,25));
// task8(7,25)

// 9) m ve n arasinda hem cut, hem de 3-e bolunen ededleri ekrana cixarin.

// function task9(m,n){
//     for (let i = m+1; i < n; i++) {
//         if (i%2==0 && i%3==0) {
//             console.log(i);
//         }
//     }
// }

// function task9(m,n){
//     let arr = [];
//     for (let i = m+1; i < n; i++) {
//         if (i%2==0 && i%3==0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// let task9=(m,n)=>{
//     for (let i = m+1; i < n; i++) {
//         if (i%2==0 && i%3==0) {
//             console.log(i);
//         }
//     }
// }

// let task9=(m,n)=>{
//     let arr = [];
//     for (let i = m+1; i < n; i++) {
//         if (i%2==0 && i%3==0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// task9(12,25);

// 10) m ededinin reqemleri arasinda en boyuk reqemi tapin.

// function task10(m){
//     let max =0;
//     while(m>0){
//         let num = m%10;
//         if (num>max) {
//             max=num
//         }
//         m = (m-num)/10;
//     }
//     return max
// }

// function task10(m){
//     let max =0;
//     while(m>0){
//         let num = m%10;
//         if (num>max) {
//             max=num
//         }
//         m = (m-num)/10;
//     }
//     console.log(max);
// }

// let task10=(m)=>{
//     let max =0;
//     while(m>0){
//         let num = m%10;
//         if (num>max) {
//             max=num
//         }
//         m = (m-num)/10;
//     }
//     return max
// }

// let task10=(m)=>{
//     let max =0;
//     while(m>0){
//         let num = m%10;
//         if (num>max) {
//             max=num
//         }
//         m = (m-num)/10;
//     }
//     console.log(max);
// }

// console.log(task10(789));
// task10(789);

// 11) m ededinin reqemleri arasinda en kicik reqemi tapin.

// function task11(m){
//     let min = m;

//     while(m>0){
//         let num = m%10;
//         if (num<min) {
//             min=num;
//         }
//         m= (m-num)/10;
//     }
//     return min;
// }

// function task11(m){
//     let min = m;

//     while(m>0){
//         let num = m%10;
//         if (num<min) {
//             min=num;
//         }
//         m= (m-num)/10;
//     }
//     console.log(min);
// }

// let task11=(m)=>{
//     let min = m;

//     while(m>0){
//         let num = m%10;
//         if (num<min) {
//             min=num;
//         }
//         m= (m-num)/10;
//     }
//     return min;
// }

// let task11=(m)=>{
//     let min = m;

//     while(m>0){
//         let num = m%10;
//         if (num<min) {
//             min=num;
//         }
//         m= (m-num)/10;
//     }
//     console.log(min);
// }

// console.log(task11(45));
// task11(45)

// 12) m ededinin reqemleri ceminin cut ve ya tek oldugunu muyyen edin.

// function task12(m){
//     let sum = 0;

//     while(m>0){
//         let num = m%10;
//         sum+=num;
//         m = (m-num)/10;
//     }
//     if (sum%2==0) {
//         return "cut";
//     }
//     else{
//         return "tek"
//     }
// }

// function task12(m){
//     let sum = 0;

//     while(m>0){
//         let num = m%10;
//         sum+=num;
//         m = (m-num)/10;
//     }
//     if (sum%2==0) {
//         console.log("cut");
//     }
//     else{
//         console.log("tek");
//     }
// }

// let task12=(m)=>{
//     let sum = 0;

//     while(m>0){
//         let num = m%10;
//         sum+=num;
//         m = (m-num)/10;
//     }
//     if (sum%2==0) {
//         return "cut";
//     }
//     else{
//         return "tek"
//     }
// }

// let task12=(m)=>{
//     let sum = 0;

//     while(m>0){
//         let num = m%10;
//         sum+=num;
//         m = (m-num)/10;
//     }
//     if (sum%2==0) {
//         console.log("cut");
//     }
//     else{
//         console.log("tek");
//     }
// }

// console.log(task12(44));
// task12(44)

// 13) m ededinin nece cut reqemi oldugunu tapin.

// function task13(m){
//     let cout = 0;

//     while(m>0){
//         let num = m%10;
//         if (num%2==0) {
//             cout++;
//         }
//         m = (m-num)/10;
//     }
//     return cout;
// }

// function task13(m){
//     let cout = 0;

//     while(m>0){
//         let num = m%10;
//         if (num%2==0) {
//             cout++;
//         }
//         m = (m-num)/10;
//     }
//     console.log(cout);
// }

// let task13=(m)=>{
//     let cout = 0;

//     while(m>0){
//         let num = m%10;
//         if (num%2==0) {
//             cout++;
//         }
//         m = (m-num)/10;
//     }
//     return cout;
// }

// let task13=(m)=>{
//     let cout = 0;

//     while(m>0){
//         let num = m%10;
//         if (num%2==0) {
//             cout++;
//         }
//         m = (m-num)/10;
//     }
//     console.log(cout);
// }
// console.log(task13(445));
// task13(445)

// 14) m ededinin nece tek reqemi oldugunu tapin.

// function task14(m){
//     let cout = 0;

//     while(m>0){
//         let num = m%10;
//         if (num%2==1) {
//             cout++;
//         }
//         m = (m-num)/10;
//     }
//     return cout;
// }

// function task14(m){
//     let cout = 0;

//     while(m>0){
//         let num = m%10;
//         if (num%2==1) {
//             cout++;
//         }
//         m = (m-num)/10;
//     }
//     console.log(cout);
// }

// let task14=(m)=>{
//     let cout = 0;

//     while(m>0){
//         let num = m%10;
//         if (num%2==1) {
//             cout++;
//         }
//         m = (m-num)/10;
//     }
//     return cout;
// }

// let task14=(m)=>{
//     let cout = 0;

//     while(m>0){
//         let num = m%10;
//         if (num%2==1) {
//             cout++;
//         }
//         m = (m-num)/10;
//     }
//     console.log(cout);
// }

// console.log(task14(445));
// task14(445)

// 15) m ededinin reqemleri arasinda 5-den boyuk olan reqemlerin cemini tapin.

// function task15(n){
//     let sum = 0;

//     while(n>0){
//         let num = n%10;

//         if (num>5) {
//             sum+=num;
//         }
//         n = (n-num)/10;
//     }
//     return sum
// }

// function task15(n){
//     let sum = 0;

//     while(n>0){
//         let num = n%10;

//         if (num>5) {
//             sum+=num;
//         }
//         n = (n-num)/10;
//     }
//     console.log(sum);

// }

// let task15=(n)=>{
//     let sum = 0;

//     while(n>0){
//         let num = n%10;

//         if (num>5) {
//             sum+=num;
//         }
//         n = (n-num)/10;
//     }
//     return sum
// }

// let task15=(n)=>{
//     let sum = 0;

//     while(n>0){
//         let num = n%10;

//         if (num>5) {
//             sum+=num;
//         }
//         n = (n-num)/10;
//     }
//     return sum
// }

// console.log(task15(785));
// task15(785)

// 16) m ededini tersine cevirib ekrana cixarin.

// let task16 = (m) => {
//     let nums = [];

//     while (m > 0) {
//         let digit = m % 10;
//         nums.push(digit);

//         m = (m - digit) / 10;
//     }
//     nums.reverse;
//     console.log(nums.join(""));
// };

// let task16 = (m) => {
//     let nums = [];

//     while (m > 0) {
//         let digit = m % 10;
//         nums.push(digit);

//         m = (m - digit) / 10;
//     }
//     nums.reverse;
//     res = nums.join("");
//     return res;
// };

// function task16(m) {
//     let nums = [];

//     while (m > 0) {
//         let digit = m % 10;
//         nums.push(digit);

//         m = (m - digit) / 10;
//     }
//     nums.reverse;
//     console.log(nums.join(""));
// }

// function task16(m) {
//     let nums = [];

//     while (m > 0) {
//         let digit = m % 10;
//         nums.push(digit);

//         m = (m - digit) / 10;
//     }
//     nums.reverse;
//     res = nums.join("");
//     return res;
// }

// task16(155);

// 17) m ededinin palindrome olub-olmadigini muyyen edin.

// function task17(m){
//     let nums = String(m).split("").reverse().join("");

//     if (m == nums) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function task17(m){
//     let nums = String(m).split("").reverse().join("");

//     if (m == nums) {
//         console.log(true);

//     }
//     else{
//         console.log(false);

//     }
// }

// let task17=(m)=>{
//     let nums = String(m).split("").reverse().join("");

//     if (m == nums) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let task17=(m)=>{
//     let nums = String(m).split("").reverse().join("");

//     if (m == nums) {
//         console.log(true);

//     }
//     else{
//         console.log(false);

//     }
// }
// console.log(task17(55));
// task17(55)

// 18) m ededinin ilk ve son reqeminin cemini tapin.

// function task18(m){
//     let nums = String(m).split("").map(Number)

//     console.log(nums[0]+nums[nums.length-1]);

// }

// function task18(m){
//     let nums = String(m).split("").map(Number)

//     return nums[0]+nums[nums.length-1]

// }

// let task18=(m)=>{
//     let nums = String(m).split("").map(Number)

//     console.log(nums[0]+nums[nums.length-1]);

// }

// let task18=(m)=>{
//     let nums = String(m).split("").map(Number)

//     return nums[0]+nums[nums.length-1]

// }
// console.log(task18(457));
// task18(457);

// 19) m ededinin reqemleri arasinda 0 olan reqemlerin sayini tapin.

// function task18(m){
//     let nums = String(m).split("").map(Number);
//     let count = 0;
//     nums.forEach(element => {
//         if (element == 0) {
//             count++;
//         }
//     });
//     return count;
// }

// function task18(m){
//     let nums = String(m).split("").map(Number);
//     let count = 0;
//     nums.forEach(element => {
//         if (element == 0) {
//             count++;
//         }
//     });
//     console.log(count);

// }

// let task18=(m)=>{
//     let nums = String(m).split("").map(Number);
//     let count = 0;
//     nums.forEach(element => {
//         if (element == 0) {
//             count++;
//         }
//     });
//     return count;
// }

// let task18=(m)=>{
//     let nums = String(m).split("").map(Number);
//     let count = 0;
//     nums.forEach(element => {
//         if (element == 0) {
//             count++;
//         }
//     });
//     console.log(count);

// }
// console.log(task18(5005));
// task18(5005)

// 20) m ededinin reqemlerinin hasilini tapin.

// function task20(m){
//     let nums = String(m).split("").map(Number);

//     let res = 1;
//     nums.forEach(element => {
//         res*=element;
//     });
//     return res;
// }

// function task20(m){
//     let nums = String(m).split("").map(Number);

//     let res = 1;
//     nums.forEach(element => {
//         res*=element;
//     });
//     console.log(res);
// }

// let task20=(m)=>{
//     let nums = String(m).split("").map(Number);

//     let res = 1;
//     nums.forEach(element => {
//         res*=element;
//     });
//     return res;
// }

// let task20=(m)=>{
//     let nums = String(m).split("").map(Number);

//     let res = 1;
//     nums.forEach(element => {
//         res*=element;
//     });
//     console.log(res);
// }

// console.log(task20(514));
// task20(514)

localStorage.setItem(
    "array",
    JSON.stringify([
        1, 7, 5, 4, 77, 8, 5, 10, 7, 12, 55, 48, 99, 7, 3, -9, -2, 0, -6,
    ]),
);
let array = JSON.parse(localStorage.getItem("array"));

// 21) Array daxilinde 10-dan boyuk olan elementlerin sayini tapin.

// function task21(arr){
//     let count = 0;
//     arr.forEach(element => {
//         if (element>10) {
//             count++;
//         }
//     });
//     return count;
// }

// function task21(arr){
//     let count = 0;
//     arr.forEach(element => {
//         if (element>10) {
//             count++;
//         }
//     });
//     console.log(count);

// }

// let task21=(arr)=>{
//     let count = 0;
//     arr.forEach(element => {
//         if (element>10) {
//             count++;
//         }
//     });
//     return count;
// }

// let task21=(arr)=>{
//     let count = 0;
//     arr.forEach(element => {
//         if (element>10) {
//             count++;
//         }
//     });
//     console.log(count);

// }

// console.log(task21(array));
// task21(array)

// 22) Array daxilinde 10-dan kicik olan elementlerin cemini tapin.

// function task22(arr){
//     let sum = 0;

//     arr.forEach(element => {
//         if (element<10) {
//             sum+=element;
//         }
//     });
//     return sum;
// }

// function task22(arr){
//     let sum = 0;

//     arr.forEach(element => {
//         if (element<10) {
//             sum+=element;
//         }
//     });
//     console.log(sum);

// }

// let task22=(arr)=>{
//     let sum = 0;

//     arr.forEach(element => {
//         if (element<10) {
//             sum+=element;
//         }
//     });
//     return sum;
// }

// let task22=(arr)=>{
//     let sum = 0;

//     arr.forEach(element => {
//         if (element<10) {
//             sum+=element;
//         }
//     });
//     console.log(sum);

// }
// console.log(task22(array));
// task22(array)

// 23) Array daxilinde 3-e bolunen elementleri ekrana cixarin.

// function task23(arr){
//     let res = [];

//     arr.forEach(element => {
//        if (element%3==0) {
//             res.push(element);
//        }
//     });
//     return res;
// }

// function task23(arr){
//     let res = [];

//     arr.forEach(element => {
//        if (element%3==0) {
//             res.push(element);
//        }
//     });
//     console.log(res);

// }

// let task23=(arr)=>{
//     let res = [];

//     arr.forEach(element => {
//        if (element%3==0) {
//             res.push(element);
//        }
//     });
//     return res;
// }

// let task23=(arr)=>{
//     let res = [];

//     arr.forEach(element => {
//        if (element%3==0) {
//             res.push(element);
//        }
//     });
//     console.log(res);

// }

// console.log(task23(array));
// task23(array)

// 24) Array daxilinde 5-e bolunen elementlerin sayini tapin.

// function task24(datas){
//     let cout = 0;
//     datas.forEach(element => {
//         if (element%5==0) {
//             cout++;
//         }
//     });
//     return cout;
// }

// function task24(datas){
//     let cout = 0;
//     datas.forEach(element => {
//         if (element%5==0) {
//             cout++;
//         }
//     });
//     console.log(cout);

// }

// let task24=(datas)=>{
//     let cout = 0;
//     datas.forEach(element => {
//         if (element%5==0) {
//             cout++;
//         }
//     });
//     return cout;
// }

// let task24=(datas)=>{
//     let cout = 0;
//     datas.forEach(element => {
//         if (element%5==0) {
//             cout++;
//         }
//     });
//     console.log(cout);

// }

// console.log(task24(array));
// task24(array)

// 25) Array daxilinde menfi elementlerin cemini tapin.

// function task25(elements){
//     let sum = 0;

//     elements.forEach(element => {
//         if (element<0) {
//             sum+=element
//         }
//     });
//     return sum;
// }

// function task25(elements){
//     let sum = 0;

//     elements.forEach(element => {
//         if (element<0) {
//             sum+=element
//         }
//     });
//     console.log(sum);

// }

// let task25=(elements)=>{
//     let sum = 0;

//     elements.forEach(element => {
//         if (element<0) {
//             sum+=element
//         }
//     });
//     return sum;
// }

// let task25=(elements)=>{
//     let sum = 0;

//     elements.forEach(element => {
//         if (element<0) {
//             sum+=element
//         }
//     });
//     console.log(sum);

// }
// console.log(task25(array));
// task25(array)

// 26) Array daxilinde musbet elementlerin hasilini tapin.

// function task26(nums){
//     let res = 1;

//     nums.forEach(element => {
//         if (element>0) {
//             res*=element;
//         }
//     });
//     return res;
// }

// function task26(nums){
//     let res = 1;

//     nums.forEach(element => {
//         if (element>0) {
//             res*=element;
//         }
//     });
//     console.log(res);

// }

// let task26=(nums)=>{
//     let res = 1;

//     nums.forEach(element => {
//         if (element>0) {
//             res*=element;
//         }
//     });
//     return res;
// }

// let task26=(nums)=>{
//     let res = 1;

//     nums.forEach(element => {
//         if (element>0) {
//             res*=element;
//         }
//     });
//     console.log(res);

// }
// console.log(task26(array));
// task26(array)

// 27) Array daxilinde 0-a beraber olan elementlerin sayini tapin.

// function task27(nums){
//     let count = 0;
//     nums.forEach(element => {
//         if (element==0) {
//             count ++;
//         }
//     });
//     return count;
// }

// function task27(nums){
//     let count = 0;
//     nums.forEach(element => {
//         if (element==0) {
//             count ++;
//         }
//     });
//     console.log(count);

// }

// let task27=(nums)=>{
//     let count = 0;
//     nums.forEach(element => {
//         if (element==0) {
//             count ++;
//         }
//     });
//     return count;
// }

// let task27=(nums)=>{
//     let count = 0;
//     nums.forEach(element => {
//         if (element==0) {
//             count ++;
//         }
//     });
//     console.log(count);

// }

// console.log(task27(array));
// task27(array)

// 28) Array daxilinde ilk cut elementi tapin.

// function task28(arr){
//     return arr.find((e)=> e%2==0)
// }

// function task28(arr){
//     console.log(arr.find((e)=> e%2==0))
// }

// let task28=(arr)=>{
//     return arr.find((e)=> e%2==0)
// }

// let task28=(arr)=>{
//     console.log(arr.find((e)=> e%2==0))
// }
// console.log(task28(array));
// task28(array)

// 29) Array daxilinde son tek elementi tapin.

// function task29(arr){
//     let nums = arr.filter((e)=> e%2==1);

//     return nums[nums.length-1]
// }

// function task29(arr){
//     let nums = arr.filter((e)=> e%2==1);

//     console.log(nums[nums.length-1])
// }

// let task29=(arr)=>{
//     let nums = arr.filter((e)=> e%2==1);

//     return nums[nums.length-1]
// }

// let task29=(arr)=>{
//     let nums = arr.filter((e)=> e%2==1);

//     console.log(nums[nums.length-1])
// }

// console.log(task29(array));
// task29(array)

// 30) Array daxilinde en boyuk ve en kicik element arasindaki ferqi tapin.

// function task30(elements){
//     let max = elements.sort((a,b)=> b-a)[0]
//     let min = elements.sort((a,b)=> a-b)[0]

//     return max-min;
// }

// function task30(elements){
//     let max = elements.sort((a,b)=> b-a)[0]
//     let min = elements.sort((a,b)=> a-b)[0]

//     console.log(max-min);
// }

// let task30=(elements)=>{
//     let max = elements.sort((a,b)=> b-a)[0]
//     let min = elements.sort((a,b)=> a-b)[0]

//     return max-min;
// }

// let task30=(elements)=>{
//     let max = elements.sort((a,b)=> b-a)[0]
//     let min = elements.sort((a,b)=> a-b)[0]

//     console.log(max-min);
// }

// console.log(task30(array));
// task30(array)

// 31) Array elementlerinin orta qiymetini tapin.

// function task31(datas){
//     let sum = 0;

//     datas.forEach(element => {
//         sum+=element;
//     });

//     return sum/datas.length
// }

// function task31(datas){
//     let sum = 0;

//     datas.forEach(element => {
//         sum+=element;
//     });

//     console.log((sum/datas.length).toFixed(2))
// }

// let task31=(datas)=>{
//     let sum = 0;

//     datas.forEach(element => {
//         sum+=element;
//     });

//     return sum/datas.length
// }

// let task31=(datas)=>{
//     let sum = 0;

//     datas.forEach(element => {
//         sum+=element;
//     });

//     console.log((sum/datas.length).toFixed(2))
// }

// console.log(task31(array).toFixed(2));
// task31(array);

// 32) Array daxilinde 20-den boyuk ve 50-den kicik elementlerin sayini tapin.

// function task32(arr){
//     let count = 0;

//     arr.forEach(element => {
//         if (element>20 && element<50) {
//             count++;
//         }
//     });
//     return count;
// }

// function task32(arr){
//     let count = 0;

//     arr.forEach(element => {
//         if (element>20 && element<50) {
//             count++;
//         }
//     });
//     console.log(count);

// }

// let task32=(arr)=>{
//     let count = 0;

//     arr.forEach(element => {
//         if (element>20 && element<50) {
//             count++;
//         }
//     });
//     return count;
// }

// let task32=(arr)=>{
//     let count = 0;

//     arr.forEach(element => {
//         if (element>20 && element<50) {
//             count++;
//         }
//     });
//     console.log(count);

// }
// console.log(task32(array));
// task32(array)

// 33) Array daxilinde hem menfi, hem de cut olan elementleri ekrana cixarin.

// function task33(datas){
//     let res = [];

//     datas.forEach(element => {
//         if (element<0 || element%2==0) {
//             res.push(element);
//         }
//     });
//     return res
// }

// function task33(datas){
//     let res = [];

//     datas.forEach(element => {
//         if (element<0 || element%2==0) {
//             res.push(element);
//         }
//     });
//    console.log(res);
// }

// let task33=(datas)=>{
//     let res = [];

//     datas.forEach(element => {
//         if (element<0 || element%2==0) {
//             res.push(element);
//         }
//     });
//     return res
// }

// let task33=(datas)=>{
//     let res = [];

//     datas.forEach(element => {
//         if (element<0 || element%2==0) {
//             res.push(element);
//         }
//     });
//    console.log(res);
// }
// console.log(task33(array));
// task33(array)

// 34) Array daxilinde hem musbet, hem de tek olan elementlerin cemini tapin.

// function task34(nums){
//     let sum = 0;

//     nums.forEach(element => {
//         if (element>0 && element%2==1) {
//             sum+=element;
//         }
//     });
//     return sum;
// }

// function task34(nums){
//     let sum = 0;

//     nums.forEach(element => {
//         if (element>0 && element%2==1) {
//             sum+=element;
//         }
//     });
//     console.log(sum);

// }

// let task34=(nums)=>{
//     let sum = 0;

//     nums.forEach(element => {
//         if (element>0 && element%2==1) {
//             sum+=element;
//         }
//     });
//     return sum;
// }

// let task34=(nums)=>{
//     let sum = 0;

//     nums.forEach(element => {
//         if (element>0 && element%2==1) {
//             sum+=element;
//         }
//     });
//     console.log(sum);

// }

// console.log(task34(array));
// task34(array);

// 35) Array daxilinde maksimum elementin indexini tapin.

// function task35(elements){
//     let max = elements.sort((a,b)=> a-b)[elements.length-1];
//     return elements.indexOf(max);
// }

// function task35(elements){
//     let max = elements.sort((a,b)=> a-b)[elements.length-1];
//     console.log(elements.indexOf(max));
// }

// let task35=(elements)=>{
//     let max = elements.sort((a,b)=> a-b)[elements.length-1];
//     return elements.indexOf(max);
// }

// let task35=(elements)=>{
//     let max = elements.sort((a,b)=> a-b)[elements.length-1];
//     console.log(elements.indexOf(max));
// }
// console.log(task35(array));
// task35(array)

// 36) Array daxilinde minimum elementin indexini tapin.

// function task36(arr){
//     let min = arr[0]
//     arr.forEach(element => {
//         if (element<min) {
//             min=element;
//         }
//     });
//     return arr.indexOf(min);
// }

// function task36(arr){
//     let min = arr[0]
//     arr.forEach(element => {
//         if (element<min) {
//             min=element;
//         }
//     });
//     console.log(arr.indexOf(min));
// }

// let task36=(arr)=>{
//     let min = arr[0]
//     arr.forEach(element => {
//         if (element<min) {
//             min=element;
//         }
//     });
//     return arr.indexOf(min);
// }

// let task36=(arr)=>{
//     let min = arr[0]
//     arr.forEach(element => {
//         if (element<min) {
//             min=element;
//         }
//     });
//     console.log(arr.indexOf(min));
// }

// console.log(task36(array));
// task36(array)

// 37) Array daxilinde cut ve tek elementlerin sayini muqayise edin ve hansi sayin cox oldugunu gosterin.

// function task37(arr){
//     let even = arr.filter((e)=> e%2==0).length;
//     let notEven = arr.filter((e)=> e%2==1).length;

//     if (even>notEven) {
//         return `even: ${even}`
//     }
//     else{
//         return `Not Evens: ${notEven}`
//     }
// }

// function task37(arr){
//     let even = arr.filter((e)=> e%2==0).length;
//     let notEven = arr.filter((e)=> e%2==1).length;

//     if (even>notEven) {
//         console.log(`even: ${even}`)
//     }
//     else{
//         console.log(`Not Evens: ${notEven}`)
//     }
// }

// let task37=(arr)=>{
//     let even = arr.filter((e)=> e%2==0).length;
//     let notEven = arr.filter((e)=> e%2==1).length;

//     if (even>notEven) {
//         return `even: ${even}`
//     }
//     else{
//         return `Not Evens: ${notEven}`
//     }
// }

// let task37=(arr)=>{
//     let even = arr.filter((e)=> e%2==0).length;
//     let notEven = arr.filter((e)=> e%2==1).length;

//     if (even>notEven) {
//         console.log(`even: ${even}`)
//     }
//     else{
//         console.log(`Not Evens: ${notEven}`)
//     }
// }

// console.log(task37(array));
// task37(array)

// 38) Array daxilinde yalniz bir defe tekrarlanan elementleri tapin.

// function task38(arr) {
//     return arr.filter((e)=> arr.indexOf(e) === arr.lastIndexOf(e))
// }

// function task38(arr) {
//     console.log(arr.filter((e)=> arr.indexOf(e) === arr.lastIndexOf(e)));
// }

// let task38=(arr)=>{
//     return arr.filter((e)=> arr.indexOf(e) === arr.lastIndexOf(e))
// }

// let task38=(arr)=>{
//     console.log(arr.filter((e)=> arr.indexOf(e) === arr.lastIndexOf(e)));
// }

// console.log(task38(array));
// task38(array)

// 39) Array daxilinde tekrarlanan elementlerin sayini tapin.

function task39(arr) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
    }
    return count;
}

// 40) Array elementlerini tersine duzerek ekrana cixarin.

// function task40(datas){
//     return datas.reverse();
// }

// function task40(datas){
//     console.log(datas.reverse());
// }

// let task40=(datas)=>{
//     return datas.reverse();
// }

// let task40=(datas)=>{
//     console.log(datas.reverse());
// }
// console.log(task40(array));
// task40(array)

// 41) Array daxilinde ikinci en boyuk elementi tapin.

// function task41(datas){
//     let sortedArr = datas.sort((a,b)=> b-a);
//     return sortedArr[1];
// }

// function task41(datas){
//     let sortedArr = datas.sort((a,b)=> b-a);
//     console.log(sortedArr[1]);
// }

// let task41=(datas)=>{
//     let sortedArr = datas.sort((a,b)=> b-a);
//     return sortedArr[1];
// }

// let task41=(datas)=>{
//     let sortedArr = datas.sort((a,b)=> b-a);
//     console.log(sortedArr[1]);
// }

// console.log(task41(array));
// task41(array)

// 42) Array daxilinde ikinci en kicik elementi tapin.

// function task42(arr){
//     let sortedArr = arr.sort((a,b)=> a-b);
//     return sortedArr[1];
// }

// function task42(arr){
//     let sortedArr = arr.sort((a,b)=> a-b);
//     console.log(sortedArr[1]);
// }

// let task42=(arr)=>{
//     let sortedArr = arr.sort((a,b)=> a-b);
//     return sortedArr[1];
// }

// let task42=(arr)=>{
//     let sortedArr = arr.sort((a,b)=> a-b);
//     console.log(sortedArr[1]);
// }
// console.log(task42(array));
// task42(array)

// 43) Array daxilinde en boyuk iki elementin cemini tapin.

// function task43(datas){
//     let sortData = datas.sort((a,b)=> b-a);

//     return sortData[0]+sortData[1];
// }

// function task43(datas){
//     let sortData = datas.sort((a,b)=> b-a);

//     console.log(sortData[0]+sortData[1]);
// }

// let task43=(datas)=>{
//     let sortData = datas.sort((a,b)=> b-a);

//     return sortData[0]+sortData[1];
// }

// let task43=(datas)=>{
//     let sortData = datas.sort((a,b)=> b-a);

//     console.log(sortData[0]+sortData[1]);
// }

// console.log(task43(array));
// task43(array)

// 44) Array daxilinde butun menfi elementleri musbete cevirin.

// function task44(datas){
//     let res = datas.map((e)=> Math.abs(e))
//     return res;
// }

// function task44(datas){
//     let res = datas.map((e)=> Math.abs(e))
//     console.log(res);

// }

// let task44=(datas)=>{
//     let res = datas.map((e)=> Math.abs(e))
//     return res;
// }

// let task44=(datas)=>{
//     let res = datas.map((e)=> Math.abs(e))
//     console.log(res);

// }

// console.log(task44(array));
// task44(array)

// 45) Array daxilinde cut elementleri bir array-e, tek elementleri basqa array-e toplayin.

// function task45(elements){
//     let evens = [];
//     let notEvens = [];

//     elements.forEach(element => {
//         if (element%2==0) {
//             evens.push(element)
//         }
//         else{
//             notEvens.push(element);
//         }
//     });
//     return `Evens: ${evens}\nNot Evens: ${notEvens}`
// }

// function task45(elements){
//     let evens = [];
//     let notEvens = [];

//     elements.forEach(element => {
//         if (element%2==0) {
//             evens.push(element)
//         }
//         else{
//             notEvens.push(element);
//         }
//     });
//     console.log(`Evens: ${evens}\nNot Evens: ${notEvens}`);
// }

// let task45=(elements)=>{
//     let evens = [];
//     let notEvens = [];

//     elements.forEach(element => {
//         if (element%2==0) {
//             evens.push(element)
//         }
//         else{
//             notEvens.push(element);
//         }
//     });
//     return `Evens: ${evens}\nNot Evens: ${notEvens}`
// }

// let task45=(elements)=>{
//     let evens = [];
//     let notEvens = [];

//     elements.forEach(element => {
//         if (element%2==0) {
//             evens.push(element)
//         }
//         else{
//             notEvens.push(element);
//         }
//     });
//     console.log(`Evens: ${evens}\nNot Evens: ${notEvens}`);
// }
// console.log(task45(array));
// task45(array)

// 46) Array daxilinde 3-e bolunen elementlerin cemi ile 3-e bolunmeyen elementlerin ceminin ferqini tapin.

// function task46(arr){
//     let a = 0;
//     let b = 0;

//     arr.forEach(element => {
//         if (element%3==0) {
//             a+=element;
//         }
//         else{
//             b+=element
//         }
//     });

//     if (a>b) {
//         return a-b;
//     }
//     else{
//         return b-a;
//     }

// }

// function task46(arr){
//     let a = 0;
//     let b = 0;

//     arr.forEach(element => {
//         if (element%3==0) {
//             a+=element;
//         }
//         else{
//             b+=element
//         }
//     });

//     if (a>b) {
//         console.log(a-b);
//     }
//     else{
//         console.log(b-a);
//     }
// }

// let task46=(arr)=>{
//     let a = 0;
//     let b = 0;

//     arr.forEach(element => {
//         if (element%3==0) {
//             a+=element;
//         }
//         else{
//             b+=element
//         }
//     });

//     if (a>b) {
//         return a-b;
//     }
//     else{
//         return b-a;
//     }

// }

// let task46=(arr)=>{
//     let a = 0;
//     let b = 0;

//     arr.forEach(element => {
//         if (element%3==0) {
//             a+=element;
//         }
//         else{
//             b+=element
//         }
//     });

//     if (a>b) {
//         console.log(a-b);
//     }
//     else{
//         console.log(b-a);
//     }
// }
// console.log(task46(array));
// task46(array)

// 47) Array elementleri arasinda ardicil gelen iki eyni elementi tapin.

// function task47(arr){
//     let res = [];

//     let sordetArr = arr.sort((a,b)=> a-b);

//     for (let i = 0; i < sordetArr.length; i++) {
//         if (sordetArr[i] == sordetArr[i+1]) {
//             if (!res.some((x)=> x==sordetArr[i])) {
//                 res.push(sordetArr[i]);
//             }
//         }
//     }

//     return res;
// }

// function task47(arr){
//     let res = [];

//     let sordetArr = arr.sort((a,b)=> a-b);

//     for (let i = 0; i < sordetArr.length; i++) {
//         if (sordetArr[i] == sordetArr[i+1]) {
//             if (!res.some((x)=> x==sordetArr[i])) {
//                 res.push(sordetArr[i]);
//             }
//         }
//     }

//     console.log(res);
// }

// let task47=(arr)=>{
//     let res = [];

//     let sordetArr = arr.sort((a,b)=> a-b);

//     for (let i = 0; i < sordetArr.length; i++) {
//         if (sordetArr[i] == sordetArr[i+1]) {
//             if (!res.some((x)=> x==sordetArr[i])) {
//                 res.push(sordetArr[i]);
//             }
//         }
//     }

//     return res;
// }

// let task47=(arr)=>{
//     let res = [];

//     let sordetArr = arr.sort((a,b)=> a-b);

//     for (let i = 0; i < sordetArr.length; i++) {
//         if (sordetArr[i] == sordetArr[i+1]) {
//             if (!res.some((x)=> x==sordetArr[i])) {
//                 res.push(sordetArr[i]);
//             }
//         }
//     }

//     console.log(res);
// }

// console.log(task47(array));
// task47(array)

// 48) Array-de en cox tekrarlanan elementi tapin.

// function task48(datas){
//     let res = datas[0]
//     maxCount = 0;

//     for (let i = 0; i < datas.length; i++) {
//         let count = 0;

//         for (let j = 1; j < array.length; j++) {
//             if (datas[i]==datas[j]) {
//                 count++;
//             }
//         }

//         if (count>maxCount) {
//             maxCount = count;
//             res = datas[i]
//         }
//     }
//     return res
// }

// function task48(datas){
//     let res = datas[0]
//     maxCount = 0;

//     for (let i = 0; i < datas.length; i++) {
//         let count = 0;

//         for (let j = 1; j < array.length; j++) {
//             if (datas[i]==datas[j]) {
//                 count++;
//             }
//         }

//         if (count>maxCount) {
//             maxCount = count;
//             res = datas[i]
//         }
//     }
//     console.log(res);
// }

// let task48=(datas)=>{
//     let res = datas[0]
//     maxCount = 0;

//     for (let i = 0; i < datas.length; i++) {
//         let count = 0;

//         for (let j = 1; j < array.length; j++) {
//             if (datas[i]==datas[j]) {
//                 count++;
//             }
//         }

//         if (count>maxCount) {
//             maxCount = count;
//             res = datas[i]
//         }
//     }
//     return res
// }

// let task48=(datas)=>{
//     let res = datas[0]
//     maxCount = 0;

//     for (let i = 0; i < datas.length; i++) {
//         let count = 0;

//         for (let j = 1; j < array.length; j++) {
//             if (datas[i]==datas[j]) {
//                 count++;
//             }
//         }

//         if (count>maxCount) {
//             maxCount = count;
//             res = datas[i]
//         }
//     }
//     console.log(res);
// }

// console.log(task48(array));
// task48(array)

// 49) Iki array verilir, her iki array-de olan ortaq elementleri tapin.

//  function task49(arr,arr2){
//     let res = [];

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < arr2.length; j++) {
//             if (arr[i] == arr2[j]) {
//                 if (!res.some((x)=> x == arr[i])) {
//                     res.push(arr[i]);
//                 }
//             }
//         }
//     }
//     return res;
// }

//  function task49(arr,arr2){
//     let res = [];

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < arr2.length; j++) {
//             if (arr[i] == arr2[j]) {
//                 if (!res.some((x)=> x == arr[i])) {
//                     res.push(arr[i]);
//                 }
//             }
//         }
//     }
//     console.log(res);

// }

//  let task49=(arr,arr2)=>{
//     let res = [];

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < arr2.length; j++) {
//             if (arr[i] == arr2[j]) {
//                 if (!res.some((x)=> x == arr[i])) {
//                     res.push(arr[i]);
//                 }
//             }
//         }
//     }
//     return res;
// }

// let task49=(arr,arr2)=>{
//     let res = [];

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < arr2.length; j++) {
//             if (arr[i] == arr2[j]) {
//                 if (!res.some((x)=> x == arr[i])) {
//                     res.push(arr[i]);
//                 }
//             }
//         }
//     }
//     console.log(res);

// }

// console.log(task49(array,[4,8,9,5,7,1,2,45]));
// task49(array,[4,8,9,5,7,1,2,45])

// 50) Array-deki elementlerin artan sira ile duzulub-duzulmediyini muyyen edin.

// function task50(arr) {
//     let ststus = false
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             ststus = false;
//             break;
//         }
//         else{
//             ststus = true
//         }
//     }
//     return ststus;
// }

// function task50(arr) {
//     let ststus = false
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             ststus = false;
//             break;
//         }
//         else{
//             ststus = true
//         }
//     }
//     console.log(ststus)
// }

// let task50=(arr)=>{
//     let ststus = false
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             ststus = false;
//             break;
//         }
//         else{
//             ststus = true
//         }
//     }
//     return ststus;
// }

// let task50=(arr)=>{
//     let ststus = false
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             ststus = false;
//             break;
//         }
//         else{
//             ststus = true
//         }
//     }
//     console.log(ststus)
// }
// console.log(task50([1, 2, 3, 4, 6]));
// task50([1, 2, 3, 4, 6])