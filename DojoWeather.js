// The function of degrees conversion
// function tempConversion () {

// var tempSelect = document.getElementById("temperature").value;
// var grades = document.querySelectorAll(".degrees h4");

// var tempValue = parseInt (grade.textContent) ;
//     if (tempSelect === "fahrenheit") {
//         var fahrenheit = (tempValue* 9/5);
//         grade.innerText = parseInt(fahrenheit) + "°";
//     }
//     if (tempSelect === "celsius") {
        
//         var celsius = (tempValue - 32);
//         grade.innerText = parseInt(celsius) + "°";
//     }
// };
function tempConversion() {
    // Get the selected temperature unit
    var tempSelect = document.getElementById("temperature").value;
  
    // Get all temperature elements
    var grades = document.querySelectorAll(".degrees h4");
  
    // Loop through each temperature element
    grades.forEach((grade) => {
      // Parse the current temperature value (remove the ° symbol)
      var tempValue = parseFloat(grade.getAttribute("data-original-value") || grade.textContent);
  
      // Store the original value if not already stored
      if (!grade.hasAttribute("data-original-value")) {
        grade.setAttribute("data-original-value", tempValue);
      }
  
      // Perform the conversion based on the selected option
      if (tempSelect === "fahrenheit") {
        // Convert to Fahrenheit
        var fahrenheit = (tempValue * 9) / 5 + 32;
        grade.innerText = Math.round(fahrenheit) + "°";
      } else if (tempSelect === "celcius") {
        // Convert to Celsius
        var originalCelsius = parseFloat(grade.getAttribute("data-original-value"));
        grade.innerText = Math.round(originalCelsius) + "°";
      }
    });
  }
  

// The cookie popup window to accept
const cookie = document.getElementById("popup-cookie");
function cookiePopup () {
    cookie.style.display = "block"
};
window.onload = function () {
    setTimeout(cookiePopup, 1000);
};
const  acceptCookies = document.getElementById("accept-popup");
acceptCookies.addEventListener("click", function() {
    cookie.style.display = "none"
});
// The popup function for the citys to display an alert when clicking.
function navAlert () {
    alert("This city is not available! Try again later!")
};