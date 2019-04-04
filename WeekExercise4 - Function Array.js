
function dataHandling2(array) {
  array.splice(1, 2, "Roman Alamsyah Elsharaway", "Provinsi Bandar Lampung")
  array.splice(4, 2, "Pria", "SMA Internasional Metro")
  array.splice(1, 0 )
  console.log(array)
  var tanggalLahir = array[3]
  var tanggalSplit = tanggalLahir.split("/")
  var bulan = tanggalSplit[1]
  switch (bulan) {
    case "01": { console.log("Januari"); break; }
    case "02": { console.log("Februari"); break; }
    case "03": { console.log("Maret"); break; }
    case "04": { console.log("April"); break; }
    case "05": { console.log("Mei"); break; }
    case "06": { console.log("Juni"); break; }
    case "07": { console.log("Juli"); break; }
    case "08": { console.log("Agustus"); break; }
    case "09": { console.log("September"); break; }
    case "10": { console.log("Oktober"); break; }
    case "11": { console.log("November"); break; }
    case "12": { console.log("December"); break; }
  }
  var tanggalSort = tanggalSplit.sort(function(a,b){return b-a})
  console.log(tanggalSort)
  var tanggalSplit2 = tanggalLahir.split("/")
  var tanggalJoin = tanggalSplit2.join("-")
  console.log(tanggalJoin)
  var nama = array[1]
  var namaSlice = nama.slice(0, 15)
  console.log(namaSlice)
}

dataHandling2(
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])  
