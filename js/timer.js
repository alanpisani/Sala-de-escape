// Timer
/**
 * La variable "minutesLabel" contiene una toma de la etiqueta <label> que lleve como id "minutes" (linea 23 en el archivo sala.php)
 */
var minutesLabel = document.getElementById("minutes");
/**
 * La variable "minutesLabel" contiene una toma de la etiqueta <label> que lleve como id "seconds" (linea 23 en el archivo sala.php)
 */
var secondsLabel = document.getElementById("seconds");
/**
 * La variable TotalSeconds es el contador del timer
 * @type {Number}
 */
var totalSeconds = 0;
var timer = setInterval(setTime, 1000);

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function secondsToString(seconds) {
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10)? '0' + second : second;
    return minute + ':' + second;
  }

  