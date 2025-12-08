import { useRef, useState } from "react";

export default function ImageReloader() {
  const reloadCount = useRef(0);
  const random = useRef(0);
  const [imgUrl, setImgUrl] = useState("https://picsum.photos/200/200?random=1");

  function reloadImage() {
    // TODO: increase reloadCount.current
    reloadCount.current = reloadCount.current+1;

    // TODO: change image URL (use random number)
    random.current = parseInt(Math.random()*(1000 - 1 + 1)) + 1;
    setImgUrl("https://picsum.photos/200/200?random=" + random.current)
  }

  function logCount() {
    console.log(reloadCount)
  }

  return (
    <>
      <img src={imgUrl} />
      <br /><br />
      <button onClick={reloadImage}>Reload Image</button>
      <button onClick={logCount}>Log Count</button>
    </>
  );
}
