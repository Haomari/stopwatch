

var ms = 0, s = 0, m = 0;
var timer;

var stopwatchEL = document.querySelector('.main__time')
var lapsContainer = document.querySelector('.main__laps')

function iconChanger() {
	document.querySelector('.main__button_1').classList.toggle('_active');
}

function startPause(){
	if(!timer) {
		timer = setInterval(run, 10);
		iconChanger()
	}else{
		clearInterval(timer);
		timer = false;
		iconChanger()
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
	if(s || m || ms) {
		iconChanger()
	}

  stopTimer();
	ms = 0;
	s = 0;
	m =0;
	stopwatchEL.textContent = getTimer();
	lapsContainer.innerHTML = '';
}

function restart(){
	stop();
	start();
}

let liNumber = 0;

function lap(){
	if(timer) {
		var li = document.createElement('li');
		liNumber++
		li.innerText = `${liNumber}. ${getTimer()}`;
		lapsContainer.appendChild(li);
	}
}

function resetLaps() {
	lapsContainer.innerHTML = '';
}
