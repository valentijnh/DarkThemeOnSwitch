function on() {
    var x = document.getElementById("on");
    if (x.classList.contains("on")) {
      x.classList.remove("on");
    } else {
      x.classList.add("on");
    }
  }

  function robeanni() {
    var x = document.getElementById("robe");
    if (x.classList.contains("robe")) {
      x.classList.remove("robe");
    } else {
      x.classList.add('robe', 'back');
    }
  }
