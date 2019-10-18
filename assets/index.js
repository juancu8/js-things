import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const button = document.querySelector("#playButton");
const muteButton = document.querySelector("#muteButton");

const player = new MediaPlayer( { el: video, plugins: [ new AutoPlay() , new Volumen() ] } );

button.onclick = () => player.togglePlayPause();
muteButton.onclick = () => player.toggleMute();