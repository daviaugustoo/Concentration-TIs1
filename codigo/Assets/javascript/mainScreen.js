document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
  
    if (!localStorage.getItem("modalShown")) {
      modal.style.display = "block";
      localStorage.setItem("modalShown", "true");
    }
  
    span.onclick = function () {
      modal.style.display = "none";
    }
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });  