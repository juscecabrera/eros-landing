
const BackgroundVideo = () => {
  return (
    <video
        className="absolute top-0 left-0 w-screen h-dvh object-cover -z-10 overflow-hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* <source src='/video2.mp4' type="video/mp4" /> */}
        <source src='/videoCorto2.mp4' type="video/mp4" />
      </video>
  );
};

export default BackgroundVideo;
