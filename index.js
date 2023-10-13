const stopBtn = document.querySelector('#stopButton');
const slowBtn = document.querySelector('#slowButton');
const goBtn = document.querySelector('#goButton');

const stopLight = document.getElementById('stopLight');
const slowLight = document.getElementById('slowLight')
const goLight = document.getElementById('goLight')

stopBtn.addEventListener('click', function(e) {
  stopLight.classList.toggle('stop');
  if (stopLight.classList.contains('stop')) {
    console.log(`${stopBtn.textContent} bulb on`);
  } else{
    console.log(`${stopBtn.textContent} bulb off`)
  }
});

slowBtn.addEventListener('click', function(e){
  slowLight.classList.toggle('slow')
  if (slowLight.classList.contains('slow')){
    console.log(`${slowBtn.textContent} bulb on`)
  } else {
    console.log(`${slowBtn.textContent} bulb off`)
  }
})

goBtn.addEventListener('click', function(e)  {
  goLight.classList.toggle('go')
  if (goLight.classList.contains('go')){
    console.log(`${goBtn.textContent} bulb on`)
  } else {
    console.log(`${goBtn.textContent} bulb off`)
  }
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
