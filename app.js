/* Created by Tivotal */

const content = document.querySelectorAll(".content");

content.forEach((item, index) => {
  let header = item.querySelector("header");
  let icon = item.querySelector("i");
  let desc = item.querySelector(".description");

  header.addEventListener("click", () => {
    item.classList.toggle("open");

    if (item.classList.contains("open")) {
      icon.classList.replace("fa-plus", "fa-minus");
      desc.style.height = `${desc.scrollHeight}px`;
    } else {
      icon.classList.replace("fa-minus", "fa-plus");
      desc.style.height = "0px";
    }

    closePrevious(index);
  });

  function closePrevious(i) {
    content.forEach((item2, index2) => {
      if (i != index2) {
        item2.classList.remove("open");

        let description = item2.querySelector(".description");

        description.style.height = "0px";

        let icon = item2.querySelector("i");
        icon.classList.replace("fa-minus", "fa-plus");
      }
    });
  }
});
