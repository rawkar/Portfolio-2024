

// particlesJS('particles-js',
  
//   {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#a52a2a"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#a52a2a"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 1,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 10,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 4,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true,
//     "config_demo": {
//       "hide_card": false,
//       "background_color": "#b61924",
//       "background_image": "",
//       "background_position": "50% 50%",
//       "background_repeat": "no-repeat",
//       "background_size": "cover"
//     }
//   }

// );

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var starDensity = .916;
var speedCoeff = .06;
var width;
var height;
var starCount;
var circleRadius;
var circleCenter;
var first = true;
var giantColor = '180,184,240';
var starColor = '226,225,142';
var cometColor = '226,225,224';
var canva = document.getElementById('universe');
var stars = [];

windowResizeHandler();
window.addEventListener('resize', windowResizeHandler, false);

createUniverse();

function createUniverse() {
  universe = canva.getContext('2d');

  for (var i = 0; i < starCount; i++) {
    stars[i] = new Star();
    stars[i].reset();
  }

  draw();
}

function draw() {
  universe.clearRect(0, 0, width, height);

  var starsLength = stars.length;

  for (var i = 0; i < starsLength; i++) {
    var star = stars[i];
    star.move();
    star.fadeIn();
    star.fadeOut();
    star.draw();
  }

  window.requestAnimationFrame(draw);
}

function Star() {

  this.reset = function() {
    this.giant = getProbability(3);
    this.comet = this.giant || first ? false : getProbability(10);
    this.x = getRandInterval(0, width - 10);
    this.y = getRandInterval(0, height);
    this.r = getRandInterval(1.1, 2.6);
    this.dx = getRandInterval(speedCoeff, 6 * speedCoeff) + (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120) + speedCoeff * 2;
    this.dy = -getRandInterval(speedCoeff, 6 * speedCoeff) - (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120);
    this.fadingOut = null;
    this.fadingIn = true;
    this.opacity = 0;
    this.opacityTresh = getRandInterval(.2, 1 - (this.comet + 1 - 1) * .4);
    this.do = getRandInterval(0.0005, 0.002) + (this.comet + 1 - 1) * .001;
  };

  this.fadeIn = function() {
    if (this.fadingIn) {
      this.fadingIn = this.opacity > this.opacityTresh ? false : true;
      this.opacity += this.do;
    }
  };

  this.fadeOut = function() {
    if (this.fadingOut) {
      this.fadingOut = this.opacity < 0 ? false : true;
      this.opacity -= this.do / 2;
      if (this.x > width || this.y < 0) {
        this.fadingOut = false;
        this.reset();
      }
    }
  };

  this.draw = function() {
    universe.beginPath();

    if (this.giant) {
      universe.fillStyle = 'rgba(' + giantColor + ',' + this.opacity + ')';
      universe.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
    } else if (this.comet) {
      universe.fillStyle = 'rgba(' + cometColor + ',' + this.opacity + ')';
      universe.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);

      //comet tail
      for (var i = 0; i < 30; i++) {
        universe.fillStyle = 'rgba(' + cometColor + ',' + (this.opacity - (this.opacity / 20) * i) + ')';
        universe.rect(this.x - this.dx / 4 * i, this.y - this.dy / 4 * i - 2, 2, 2);
        universe.fill();
      }
    } else {
      universe.fillStyle = 'rgba(' + starColor + ',' + this.opacity + ')';
      universe.rect(this.x, this.y, this.r, this.r);
    }

    universe.closePath();
    universe.fill();
  };

  this.move = function() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.fadingOut === false) {
      this.reset();
    }
    if (this.x > width - (width / 4) || this.y < 0) {
      this.fadingOut = true;
    }
  };

  (function() {
    setTimeout(function() {
      first = false;
    }, 50)
  })()
}

function getProbability(percents) {
  return ((Math.floor(Math.random() * 1000) + 1) < percents * 10);
}

function getRandInterval(min, max) {
  return (Math.random() * (max - min) + min);
}

function windowResizeHandler() {
  width = window.innerWidth;
  height = window.innerHeight;
  starCount = width * starDensity;
  circleRadius = (width > height ? height / 2 : width / 2);
  circleCenter = {
    x: width / 2,
    y: height / 2
  }

  canva.setAttribute('width', width);
  canva.setAttribute('height', height);
}




