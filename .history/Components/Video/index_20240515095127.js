

export default function Video() {
  return (<>
    <video width="640" height="480" controls preload="none" autoPlay loop>
      <source src="/video/MarketingVideoIDSP.mp4" type="video/mp4"  />

      Your browser does not support the video tag.
    </video>
  </>)
}

