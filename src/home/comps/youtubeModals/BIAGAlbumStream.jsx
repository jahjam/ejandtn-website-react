const BIAGAlbumStream = () => {
  return (
    <div className="video-container videoOne" id="player">
      <iframe
        className="youtube-video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/EEPCzYCF-pU?enablejsapi=1&version=3&playerapiid=ytplayer"
        alt="Youtube Video"
        modestBranding="0"
        controls="0"
        frameBorder="0"
        title="video1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BIAGAlbumStream;
