// Distance Calculator by Pranav

// Define the button further
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let x1 = +document.getElementById("x1-in").value;
  let y1 = +document.getElementById("y1-in").value;
  let x2 = +document.getElementById("x2-in").value;
  let y2 = +document.getElementById("y2-in").value;

  //Process
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  //Output
  document.getElementById("output").innerHTML = distance;
}
