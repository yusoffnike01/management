/** @format */

import { animate } from 'framer-motion';
import { FC, useEffect, useRef } from 'react';

interface Props {
  from: number;
  to: number;
}

export const Counter: FC<Props> = ({ from, to }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = parseInt(value.toFixed(0)).toLocaleString();
        },
      });

      return () => controls.stop();
    }
  }, [from, to]);

  return <div ref={nodeRef} />;
};
