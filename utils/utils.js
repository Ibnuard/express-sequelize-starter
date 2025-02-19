const md5 = require("md5");

function generateRandomNumber(min, max) {
  // Menghasilkan nomor acak di antara min (inklusif) dan max (inklusif)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFormattedDate(date = new Date(), sep = "") {
  // Ambil tahun, bulan, dan tanggal dari objek Date
  const year = date.getFullYear();
  // Tambahkan 1 karena bulan dimulai dari 0 (0 = Januari, 1 = Februari, dst.)
  const month = String(date.getMonth() + 1).padStart(2, "0"); // PadStart digunakan untuk menambahkan 0 di depan jika hanya 1 digit
  const day = String(date.getDate()).padStart(2, "0");

  // Gabungkan tahun, bulan, dan tanggal dengan tanda hubung
  return `${year}${sep}${month}${sep}${day}`;
}

function isMatchPassword(userPassword, dbPassword) {
  const encUserPass = md5(userPassword);

  return encUserPass == dbPassword ? true : false;
}

module.exports = {
  generateRandomNumber,
  getFormattedDate,
  isMatchPassword,
};
