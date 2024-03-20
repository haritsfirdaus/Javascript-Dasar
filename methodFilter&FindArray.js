// filter
var angka = [3,1,12,8,10,5,11,7,2,6,9,4];
 var angka2 = angka.filter(function(x){
    return x > 6; // mencari angka lebih besar dari 6
 });

 console.log(angka2.join(' '));

//  find
 var angka = [3,1,12,8,10,5,11,7,2,6,9,4];
 var angka2 = angka.find(function(x){
    return x > 6; // mencari angka lebih besar dari 6 (hanya 1 nilai)
 });

 console.log(angka2);