import { toast } from "./toast_message.js";


const btnSuccess = document.querySelector(".btn--success");
btnSuccess.onclick = () => {
  toast({
    title: "Success",
    message: "Thêm vào giỏ hàng thành công.",
    type: "success",
    duration: 5000,
  });
};

const btnÌno = document.querySelector(".btn--info");
btnÌno.onclick = () => {
  toast({
    title: "Info",
    message:
      "Thông tin cá nhân của bạn đã được cập nhật. <br />Vui lòng tải lại trang để xem",
    type: "info",
    duration: 5000,
  });
};

const btnWarning = document.querySelector(".btn--warning");
btnWarning.onclick = () => {
  toast({
    title: "Warning",
    message: "Bạn muốn xóa sản phẩm này?",
    type: "warning",
    duration: 5000,
  });
};

const btnError = document.querySelector(".btn--danger");
btnError.onclick = () => {
  toast({
    title: "Error",
    message: "Thời gian phản hồi quá lâu, vui lòng thử lại sau.",
    type: "danger",
    duration: 5000,
  });
};
