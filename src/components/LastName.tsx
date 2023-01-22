import { useEffect, useState } from "react";

const LastName = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => prev + 1)
    }, 250);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stage > 37) {
      setStage(0)
    }
  }, [stage])

  const textFromStage = (stage: number) => {
    if (stage < 4) {
      return 'B.'
    }
    if (stage < 6) {
      return 'Bu.'
    }
    if (stage < 8) {
      return 'Buk.'
    }
    if (stage < 10) {
      return 'Buko.'
    }
    if (stage < 12) {
      return 'Bukov.'
    }
    if (stage < 14) {
      return 'Bukove.'
    }
    if (stage < 25) {
      return 'Bukovec.'
    }
    if (stage < 26) {
      return 'Bukove.'
    }
    if (stage < 27) {
      return 'Bukov.'
    }
    if (stage < 28) {
      return 'Buko.'
    }
    if (stage < 29) {
      return 'Buk.'
    }
    if (stage < 30) {
      return 'Bu.'
    }
    return 'B.'
  }

  return <span className="text-green-700 text-5xl">{textFromStage(stage)}</span>;
};

export default LastName;
