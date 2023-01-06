import Player from '@vimeo/player';
import { throttle } from 'lodash';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (currentTime) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds))
}, 1000));

const savedTime = localStorage.getItem("videoplayer-current-time");
const secondTime = JSON.parse(savedTime);
if (savedTime) {
    player.setCurrentTime(secondTime)
}
