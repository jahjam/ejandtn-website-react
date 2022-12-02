const TwoSongsEp = () => {
  return (
    <div className="video-container" id="player">
      <iframe
        className="youtube-video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/CMTG1q8EZ-M?enablejsapi=1&version=3&playerapiid=ytplayer"
        alt="Youtube Video"
        modestBranding="0"
        controls="0"
        frameBorder="0"
        title="video2"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TwoSongsEp;
