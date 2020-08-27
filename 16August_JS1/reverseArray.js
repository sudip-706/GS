var  a1=[1,2,3,4,5,6,7,8];
var a2 = [];
// for(let i =(a1.length - 1);i>=0 ;i--){
//     a2.push(a1[i])
// }
// console.log(a2);
var  length = a1.length;
console.log(length);

for(var i =0;i<length;i++){
    console.log(i+""+a1.length);
    a2.push(a1.pop());


}
console.log(a2);