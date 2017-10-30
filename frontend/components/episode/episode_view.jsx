import React from 'react';
// import PlayBar from './play_bar';


class EpisodeView extends React.Component {
  constructor(props){
    super(props);
    this.playOrPause = this.playOrPause.bind(this);
    this.rewind = this.rewind.bind(this);
    this.forward = this.forward.bind(this);
  }

  playOrPause() {
    if (this.video.paused) {

      this.video.play();
    } else{
      this.video.pause();
    }
  }

  rewind() {
    this.video.currentTime -= 1;
  }

  forward(){
    this.video.currentTime += 1;
  }

  updateProgress(){
    this.video.addEventListener('timeupdate', function() {
      let percentCompleted = Math.floor((100 / this.video.duration * video.currentTime));
      const progressBar = document.getElementById("progress-bar");
      progressBar.value = percentCompleted;
      progressBar.getElementById("progress-bar-render")[0].innerHTML = percentCompleted;

    }, false);
  }

  trackProgress(){
    progressInterval = setInterval(updateProgress, 33);
  }

  stopTrackingProgress(){
    clearInterval(progressInterval);
  }

  componentDidMount(){
    
  }


  render(){
    var progressBarStyle =
        (<progress className="play-bar-progress" id="progress-bar" max='100' value="0">
            <span id="progress-bar-render">0</span>%played
        </progress>);


    return (
      <div className="episode-grandparent">

        <div className="episode-parent">
        </div>
        <div className="video-tray">

          <div className="video-container" id="episode">
            <video ref={element => this.video = element}>

              <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
            </video>

            <div className="play-bar-parent">
              <div className="play-bar-background">
              </div>
              <section id="video-controls" ref={el => this.controls = el}>
                <button className="play-bar-play fa fa-play"
                        onClick={this.playOrPause}>
                </button>
                <button className="play-bar-rewind fa fa-step-backward"
                        onClick={this.rewind}>
                </button>
                <button className="play-bar-forward fa fa-step-forward"
                        onClick={this.forward}>
                </button>

                {progressBarStyle}


              </section>

            </div>
          </div>
        </div>

      </div>
    );
  }


}


export default EpisodeView;
