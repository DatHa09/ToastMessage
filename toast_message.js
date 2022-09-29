export const toast = ({
  title = "",
  message = "",
  type = "info",
  duration = 3000,
}) => {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    //auto remove toast
    const autoRemoveId = setTimeout(() => {
      main.removeChild(toast);
    }, duration + 1000);

    //Remove when clicked close button
    toast.onclick = (e) => {
      e.target.closest(".toast__close") &&
        (main.removeChild(toast), clearTimeout(autoRemoveId));
    };

    const icons = {
      success: "fa-circle-check",
      info: "fa-circle-info",
      warning: "fa-circle-exclamation",
      danger: "fa-circle-xmark",
    };

    const icon = icons[type];

    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);

    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
      <div class="toast__icon">
        <i class="fa-solid ${icon}"></i>
      </div>
      <div class="toast__body">
        <div class="toast__title">${title}</div>
        <div class="toast__msg">${message}</div>
      </div>
      <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
      </div>
    `;
    main.appendChild(toast);
  }
};

export const test = '123123123'


