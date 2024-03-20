var item = prompt('masukkan nama makanan\n (nasi, ayam, ikan, susu, air putih, jus)');

    switch (item) {
        case 'nasi':
        case 'ayam':
        case 'ikan':
    alert('makanan sehat');
    break;
        case 'susu':
        case 'air putih':
        case 'jus':
    alert('minuman sehat');
    break;
    default :
    alert('makanan tidak diketahui');
    break;
}