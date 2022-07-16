

var ms = 0, s = 0, m = 0;
var timer;

var stopwatchEL = document.querySelector('.main__time')
var lapsContainer = document.querySelector('.main__laps')

function start(){
	if(!timer) {
		timer =setInterval(run, 10)
	}
}

function getTimer() {
	return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function run() {
	stopwatchEL.textContent = getTimer();
	ms++;
	if(ms == 100) {
		ms = 0;
		s++;
	}
	if(s == 60) {
		s = 0;
		m++;
	}
}

function stopTimer() {
	clearInterval(timer);
	timer = false;
}

function pause() {
  stopTimer();
}

function stop() {
  stopTimer();
	ms = 0;
	s = 0;
	m =0;
	stopwatchEL.textContent = getTimer();
}

function restart(){
	stop();
	start();
}

function lap(){
	if(timer) {
		var li = document.createElement('li');
		li.innerText = getTimer();
		lapsContainer.appendChild(li);
	}
}

function resetLaps() {
	lapsContainer.innerHTML = '';
}