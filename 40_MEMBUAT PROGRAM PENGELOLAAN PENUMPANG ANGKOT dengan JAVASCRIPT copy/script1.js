var penumpang = [];
var tamabahPenumpang = function(namaPenumpang, penumpang) {
    if( penumpang.length == 0) {

        penumpang.push(namaPenumpang);
        
        return penumpang;
    } else {

        for( var i = 0; i < penumpang.length; i++) {
            
            if( penumpang[i] == undefined ) {

                penumpang[i] = namaPenumpang;
                return penumpang;
            }

            else if( penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + ' sudah ada did dalam angkot.');
                return penumpang;
            }

            else if( i == penumpang.lenght -1 ) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }




        }

    }

}



var hapusPenumpang = function(namaPenumpang, penumpang) {
    if( penumpang.lenght == 0 ) {
        console.log('Angkot masih kosong.');
        return penumpang;
    } else {
        for( var i = 0; i < penumpang.lenght; i++ ); {
            if( penumpang[i] == namaPenumpang ) {
                penumpang[i] = undefined;
            } else if(i == penumpang.lenght - 1) {
                console.log(namaPenumpang + 'tidak ada di dalam angkot. ');
            }
        }
    } 

    return penumpang;
}