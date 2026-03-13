import { useState, useEffect, useRef } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import IdleModal from './IdleModal';

function IdleWarning({ timeout, enabled, onTick }) {
  const [idleSince, setIdleSince] = useState(null);
  const [prevEnabled, setPrevEnabled] = useState(enabled);
  const isModalOpen = idleSince !== null;

  if (prevEnabled !== enabled) {
    setPrevEnabled(enabled);
    if (!enabled) {
      setIdleSince(null);
      onTick?.(null);
    }
  }

  const enabledRef = useRef(enabled);
  useEffect(() => { enabledRef.current = enabled; }, [enabled]);

  const { reset, getRemainingTime, pause } = useIdleTimer({
    timeout,
    throttle: 500,
    events: [
      'mousemove', 'keydown', 'wheel', 'DOMMouseScroll',
      'mousewheel', 'mousedown', 'touchstart', 'touchmove',
      'MSPointerDown', 'MSPointerMove',
    ],
    onIdle: () => {
      if (enabledRef.current) {
        onTick?.(0);
        setIdleSince(Date.now());
      }
    },
  });

  useEffect(() => {
    if (isModalOpen) pause();
  }, [isModalOpen, pause]);

  useEffect(() => {
    if (!enabled || isModalOpen) return;
    const id = setInterval(() => {
      onTick?.(Math.ceil(getRemainingTime() / 1000));
    }, 500);
    return () => clearInterval(id);
  }, [enabled, isModalOpen, getRemainingTime, onTick]);

  const handleConfirm = () => {
    setIdleSince(null);
    onTick?.(Math.ceil(timeout / 1000));
    reset();
  };

  if (!enabled || !isModalOpen) return null;

  return <IdleModal onConfirm={handleConfirm} idleSince={idleSince} />;
}

export default IdleWarning;
