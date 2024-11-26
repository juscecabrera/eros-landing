
const BackgroundVideo = () => {
  return (
    <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/video2.mp4' type="video/mp4" />
      </video>
  );
};

export default BackgroundVideo;
