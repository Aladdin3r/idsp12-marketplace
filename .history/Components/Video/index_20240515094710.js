

export default function Video () {

    <video width="640" height="480" controls preload="none">
      <source src="/path/to/video.mp4" type="video/mp4" />
      <track
        src="/video/MarketingVideoIDSP.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>

}

