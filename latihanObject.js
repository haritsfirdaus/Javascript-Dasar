// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
}

let angkot1 = new Angkot('harits',['cisaat','cibadak',],[],0);
let angkot2 = new Angkot('firdaus',['cibadak','cikidang',],[],0);
let angkot3 = new Angkot('abdul',['cibadak','cicurug'],[],0);