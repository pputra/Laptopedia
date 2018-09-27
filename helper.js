class Helper {
static formatUang(number) {
    var rupiah = '';
    var balik = '';
    var angkastr = String(number)
    //di balik/reverse dulu
    for (var i = angkastr.length-1; i >= 0; i--) {
      balik = balik + angkastr[i]
    }
    //di beri titik setiap looping senilai modulus 3
    for (var j = 0; j < balik.length; j++) {
      if (j % 3 ===0) {
         rupiah += balik.substr(j,3)+'.';
      }
    }
    //dibalik lagi
    var hasil = ""
    for (var i = rupiah.length-2; i >= 0; i--) {
      hasil += rupiah[i]
    }
    return "Rp. "+ hasil +",00"
}


}

module.export = Helper
