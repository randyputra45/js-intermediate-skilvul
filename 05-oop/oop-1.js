// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.

// JAWABAN
// 1. fun1 akan menampilkan global object yaitu fun1: [Function: fun1], fun2: [Function: fun2], sedangkan
//    fun2 akan bernilai kosong
// 2. Berbeda
// 3. Hasil tersebut bisa berbeda karena arrow function tidak bisa mengunakan this binding, sedangkan regular function bisa

const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
};

obj.fun1();
obj.fun2();  