
/* Get our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filed');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('player__slider');


/* Build out functions */
function togglePlay() {
const method = video.paused ? 'play' : 'pause'; // ? == true : == else
   video[method]();
 }

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚'; // we can use this. because it is bound to the video itself
    toggle.textContent = icon;
    console.log('update the button bitch!');
}

function skip() {
console.log(this.dataset.skip);
video.currentTime += parseFloat(this.dataset.skip);

}

function handleRangeUpdate() {
console.log(this.value);

}


/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

