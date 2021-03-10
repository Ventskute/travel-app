import React from 'react'

function VideoPlayer() {
    return (
        <div className="wrapper country-video-block__wrapper" style={{
            backgroundImage: `url("./img/player-background.jpeg")`,
          }}>
            <div className="country-video-block__title">See Dubai from the sky</div>
            <div class="video-player">
              <img src="./img/player.jpeg" alt="" />
            </div>
          </div>
    )
}

export default VideoPlayer
