//Buatlah sebuah function yang mengembalikan jumlah huruf yang terkandung dalam parameter function
 //* febri => 5

 function jumlahHuruf (text){
    let result = text.length;
    return result
}
let febri = jumlahHuruf("febri")
console.log (febri)

//Buatlah sebuah function untuk menghitung jumlah kata yyang terkanudng dari parameter function. 
 //* Funtion tersebut akan mengembalikan angka dari jumlah kata tersebut
//saya makan sop buntut => 4

function hitungKata (word){
    
    let result = word.split(" ").length
    return result
}

console.log (hitungKata("saya makan sop buntut"))