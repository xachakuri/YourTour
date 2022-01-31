const tour_search_form_select = document.getElementById('direction');

tour_search_form_select.addEventListener('change', function() {
  tour_search_form_select.style.color = "#000"
});

const tour_search_form_reset_btn = document.getElementById('reset_btn');

tour_search_form_reset_btn.addEventListener('click', function () {
    document.getElementById("direction").style.color = "#A6A6A6";
});

const header = document.getElementById("myHeader");

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= 720) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

const reg = /[A-Za-zA-Яа-яЁё]/g;
const tour_search_form_phone = document.getElementById("phone");

tour_search_form_phone.oninput = function() {
  this.value = this.value.replace(reg, '');
}




