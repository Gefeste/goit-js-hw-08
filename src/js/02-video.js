import Player from '@vimeo/player';
import { throttle } from 'lodash';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (currentTime) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds))
}, 1000));

const savedTime = localStorage.getItem("videoplayer-current-time");
const secondTime = JSON.parse(savedTime);

player.setCurrentTime(secondTime).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});













// const onPlay = function () {
//     throttle(function(currentTime) {
//         localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds))
//     }, 1000)
// }
// console.log(onPlay())

// player.on('timeupdate', onPlay)


