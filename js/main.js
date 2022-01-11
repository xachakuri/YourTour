const select = document.getElementById('direction');

select.addEventListener('change', function() {
  select.style.color = "#000"
});

const button = document.getElementById('reset_btn');

button.addEventListener('click', function () {
    document.getElementById("direction").style.color = "#A6A6A6";
});

let header = document.getElementById("myHeader");

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= 720) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});





