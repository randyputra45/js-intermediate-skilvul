// 1. Apa itu synchronous?
// Kode dijalankan secara default dengan menjalankan code dari atas ke bawah

// 2. Apa itu asynchronous?
// Fungsi asynchronous Dalam skenario-nya, sebenarnya kode async telah diproses,
// hanya saja sebatas penjadwalan untuk dieksekusi pada tahapan berikutnya tergantung kondisinya 
// atau dalam arti lain kode akan menjalankan kode synchronous terlebih dahulu

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// Ya, konsep asynchronous bisa membantu dalam fetch dan juga DOM

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// First log akan dieksekusi secara berurutan selama 5 kali dengan, kemudian setelah delay 100ms 
// code baru akan menjalankan second log

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// Karena kode second log menggunakan setTimeout (asyncronous) sehingga ia akan menunggu dahulu 100ms sejak
// first log (syncronous) selesai dijalankan setelah itu second log akan ditampilkan

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// for (var i = 1; i<=5; i++) {
//     console.log("first log: ", i); // 01 - Pertama
//     setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
// }  
const secondlog = (i) => {
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
for (var i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    secondlog(i);
}