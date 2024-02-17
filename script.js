const infos = document.querySelectorAll(".list");

infos.forEach((faq) => {
  faq.addEventListener("click", function() {
    faq.classList.toggle("active");
  });
});

