import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const vimeoPlayer = new Player('vimeo-player');

vimeoPlayer.on('timeupdate', throttle((data) => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000));
  
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  vimeoPlayer.setCurrentTime(currentTime)
    .then(function(seconds) {
      vimeoPlayer.play()
        .then(function() {
          console.log('Video resumed at ' + seconds + ' seconds.');
        })
        .catch(function(error) {
          console.error('Error playing video:', error);
        });
    })
    .catch(function(error) {
      console.error('Error setting current time:', error);
    });
} else {
  vimeoPlayer.play()
    .then(function() {
      console.log('Video played from the beginning.');
    })
    .catch(function(error) {
      console.error('Error playing video:', error);
    });
}
