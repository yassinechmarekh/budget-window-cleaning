import React from "react";

export default function ModalVideo({setmodalVideo}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setmodalVideo(false)}>
      <div className="w-full max-w-3xl aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/p0Y301u0bwQ?si=kmRVISYjyrDv67o7"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
