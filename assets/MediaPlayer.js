function MediaPlayer(config){
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
};

MediaPlayer.prototype._initPlugins = function(){
	this.plugins.forEach( plugin => {
		plugin.run(this);
	});
};

MediaPlayer.prototype.play = function(){
  this.media.play();
};

MediaPlayer.prototype.pause = function(){
  this.media.pause();
};

MediaPlayer.prototype.togglePlayPause = function(){
  this.media.paused ? this.media.play() : this.media.pause();
};

MediaPlayer.prototype.mute = function(){
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function(){
  this.media.muted = false;
};

MediaPlayer.prototype.toggleMute = function(){
  this.media.muted ? this.unmute() : this.mute();
};


export default MediaPlayer;