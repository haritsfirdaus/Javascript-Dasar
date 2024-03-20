// object literal
var mhs1 = {
    nama : 'Harits',
    nim : '20210040087',
    email : 'haritsfird@gmail.com',
    jurusan : 'teknik informatika'
}
var mhs2 = {
    nama : 'Firdaus',
    nim : '20210040040',
    email : 'firdaus@gmail.com',
    jurusan : 'teknik mesin'
}


// function declaration
function buatObjectMahasiswa(nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('muhammad', '20210040004', 'muhammad@gmail.com', 'akuntansi');
var mhs4 = buatObjectMahasiswa('dinda', '20210040095', 'dindadwiyanti@gmail.com','manajemen');


// contructor
function Mahasiswa(nama, nim, email, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa('budi', '20210040050', 'budi@domain.com', 'teknik sipil');