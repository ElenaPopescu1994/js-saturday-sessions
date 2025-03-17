console.log("Here we go again");

let counter = 10;

const randomTime = function () {
  const timeTracker = document.getElementById("output");
  timeTracker.textContent = ` ${counter}`;

  console.log("Counter:", counter);

  if (counter > 0) {
    counter--;
  } else {
    clearInterval(interval);
    console.log("Counter finished!");
  }
};

const interval = setInterval(randomTime, 1000);

