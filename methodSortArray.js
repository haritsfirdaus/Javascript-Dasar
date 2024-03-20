// 8. sort - mengurutkan array
var angka = [3,1,12,8,10,5,11,7,2,6,9,4];
console.log(angka.join(' ')); //angka belum terurut
angka.sort();
console.log(angka.join(' ')); //angka sudah terurut tapi untuk satu angka
angka.sort(function(a,b){
    return a-b
});
console.log(angka.join(' ')); //angka sudah terurut semua