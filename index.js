const stopBtn = document.querySelector('#stopButton');
const slowBtn = document.querySelector('#slowButton');
const goBtn = document.querySelector('#goButton');

const stopLight = document.getElementById('stopLight');

stopBtn.addEventListener('click', function(e) {
  // console.log(e).target
    stopLight.classList.add('stop')
})





// const controls = document.getElementById("controls")
// const stopButton = document.getElementById("stopButton")
// const slowButton = document.getElementById("slowButton");
// const goButton = document.getElementById("goButton");

// const trafficLight = document.getElementById("traffic-light");
// const stopLight = document.getElementsById("stopLight");
// const slowLight = document.getElementById("slowLight");
// const goLight = document.getElementById("goLight");

// const bulb = document.getElement




// stopButton.addEventListener("click", function() {
//  stopLight.classList.toggle("stop")
// });

// slowButton.addEventListener("click", function(){
//   slowLight.classList.toggle("slow")
// })
