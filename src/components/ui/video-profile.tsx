import React from "react";

const VideoProfile = () => {
  return (
    <section
      className="w-full h-auto flex justify-center items-center mt-20 py-20"
      style={{
        backgroundImage: "url('/assets/images/red-batik.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl text-center font-bold sm:text-7xl">Video Profile</h1>
        <div className="rounded-xl grid sm:grid-cols-2 gap-5 grid-cols-1">
          <iframe
            className="sm:w-[500px] w-full h-[250px] rounded-xl"
            src="https://www.youtube.com/embed/9a5ImQJoFfk"
            title="Video Forkompi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            className="w-full h-[250px] rounded-xl"
            src="https://www.youtube.com/embed/P8t8wqJBPv4"
            title="Video Forkompi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            className="w-full h-[250px] rounded-xl"
            src="https://www.youtube.com/embed/dzlfP9Y_raM"
            title="Video Forkompi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            className="w-full h-[250px] rounded-xl"
            src="https://www.youtube.com/embed/SgUdxhW2H8M"
            title="Video Forkompi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoProfile;
