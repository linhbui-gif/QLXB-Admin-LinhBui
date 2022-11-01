window.onload = () => {
  buttonOnTop.init();
};

const buttonOnTop = {
  init: function () {
    this.config();
  },
  config: function () {
    const btn = document.querySelector(".ButtonOnTop");

    btn.addEventListener("click", () => {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  },
};
