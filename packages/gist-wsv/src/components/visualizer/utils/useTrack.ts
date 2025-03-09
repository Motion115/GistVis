import { useEffect, useRef, useState } from 'react';
// import { articleIdAtom } from '../../../globalState';
const generateUniqueIdentifier = () => Math.random().toString(36).substr(2, 9);
const useTrackVisit = (id: string) => {
  // const [articleId] = useAtom(articleIdAtom);
  const [visitCount, setVisitCount] = useState(0);
  const stayStartTimeRef = useRef<number | null>(null);
  const [identifier, setID] = useState(id);
  const handleMouseEnter = () => {
  };

  const handleMouseLeave = () => {
  };

  useEffect(() => {
    return () => {
    };
  }, []);

  return {
    visitCount,
    handleMouseEnter,
    handleMouseLeave,
    identifier,
  };
};

export default useTrackVisit;
