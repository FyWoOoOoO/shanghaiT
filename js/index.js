window.onload = function () {
  var items = document.getElementsByClassName("item");
  var goPreBtn = document.getElementById("goPre");
  var goNextBtn = document.getElementById("goNext");
  var point = document.getElementsByClassName("point");

  var index = 0;

  var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
      items[i].className = "item";
      point[i].className = "point";
    }
  };

  var goIndex = function () {
    clearActive();
    items[index].className = "item active";
    point[index].className = "point active";
  };
  goIndex();
  var goNext = function () {
    if (index < 4) {
      index++;
    } else {
      index = 0;
    }
    goIndex();
  };

  for (let i = 0; i < point.length; i++) {
    point[i].addEventListener("click", function () {
      // var  pointIndex=this.getAttribute("data-index")
      index = i;
      goIndex();
      time = 0;
    });
  }

  var time = 0;

  setInterval(function () {
    time++;
    if (time == 20) {
      goNext();
      time = 0;
    }
    if (time > 20) {
      time = 0;
      goNext();
    }
  }, 100);

  var fir = document.getElementsByClassName("fir");
  var sec = document.getElementsByClassName("sec");
  var thi = document.getElementsByClassName("thi");
  var fou = document.getElementsByClassName("fou");
  var indexall = 0;
  var wheelDelta = 0;

  document.addEventListener("wheel", function aa(event) {
     wheelDelta = String(event.wheelDelta);
    });
    
    function move() {
      if (wheelDelta.startsWith("-")) {
        if (indexall == 3) {
          indexall = 3;
        } else {
          indexall++;
        }
      } else {
        if (indexall == 0) {
          indexall = 0;
        } else {
          indexall--;
        }
      }
      fir[0].style.bottom = indexall * 100 + "vh";
      sec[0].style.bottom = indexall * 100 + "vh";
      thi[0].style.bottom = indexall * 100 + "vh";
      fou[0].style.bottom = indexall * 100 + "vh";
       for (let j = 0; j < points.length; j++) {
         points[j].className = "points";
       }
        points[indexall].className = "points active";
  }

      const throttle = (fn, delay) => {
        let flag = true; //开关变量
        return () => {
          if (!flag) return;
          flag = false;
          fn();
          setTimeout(() => {
            flag = true;
          }, delay);
        };
      };

  const oThrottle = throttle(move, 1500);
  document.addEventListener("wheel", oThrottle);
  var i_to_indexall=0
  var points = document.getElementsByClassName("points")
  points[indexall].className = "points active";
  for (let i = 0; i < points.length; i++){
    points[i].onclick = function () {
      for (let j = 0; j < points.length; j++){
        points[j].className ="points"
      }
      points[i].className = "points active"
      indexall = i;
      fir[0].style.bottom = indexall * 100 + "vh";
      sec[0].style.bottom = indexall * 100 + "vh";
      thi[0].style.bottom = indexall * 100 + "vh";
      fou[0].style.bottom = indexall * 100 + "vh";
    }
  }
};
