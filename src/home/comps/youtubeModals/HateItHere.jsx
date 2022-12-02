const HateItHere = () => {
  return (
    <div className="video-container" id="player">
      <iframe
        className="youtube-video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6K1YG8RefHo?enablejsapi=1&version=3&playerapiid=ytplayer"
        alt="Youtube Video"
        modestBranding="0"
        controls="0"
        frameBorder="0"
        title="video3"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HateItHere;
