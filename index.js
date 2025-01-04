let navbar = document.querySelector(".navbar");
document.querySelector("#menu-bar").onclick = () => {
  navbar.classList.toggle("active");
};

let search = document.querySelector(".search");
document.querySelector("#search").onclick = () => {
  search.classList.toggle("active");
};

var swiper = new Swiper(".product-row", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-row", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document
  .querySelector(".appointment-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    try {
      const response = await fetch("https://localhost:7167/api/Orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: name,
          customerSurname: surname,
          phoneNumber: phone,
          orderItem: service,
          orderDate: date,
        }),
      });
      if (response.ok) {
        alert("Siparişiniz başarıyla kaydedildi!");
      } else {
        const error = await response.json();
        alert(
          `Hata oluştu: ${
            error.message || "Bilinmeyen bir hata meydana geldi."
          }`
        );
      }
    } catch (error) {
      alert(`Sunucuyla bağlantı kurulamadı: ${error.message}`);
    }
  });
