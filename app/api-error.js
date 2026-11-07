// Dinh nghia lop ApiError ke thua tu lop Error mac dinh cua JavaScript
class ApiError extends Error {
  // Ham khoi tao nhan vao ma trang thai HTTP va thong bao loi
  constructor(statusCode, message) {
    // Goi ham khoi tao cua lop cha Error
    super();
    // Luu ma trang thai HTTP vao thuoc tinh statusCode
    this.statusCode = statusCode;
    // Luu thong bao loi vao thuoc tinh message
    this.message = message;
  }
}

// Xuat lop ApiError de cac file khac co the su dung
module.exports = ApiError;