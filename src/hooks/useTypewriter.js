import { useEffect, useState } from "react";

export default function useTypewriter(words, loop=true, speed=130, deleteSpeed=70, delay=1000) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);   // word index
  const [subIndex, setSubIndex] = useState(0); 
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) {
      if (!loop) return;
      setIndex(0);
    }

    if (subIndex === words[index]?.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setText(words[index]?.substring(0, subIndex));
      setSubIndex(subIndex + (deleting ? -1 : 1));
    }, deleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, deleteSpeed, delay, loop]);

  return text;
}
