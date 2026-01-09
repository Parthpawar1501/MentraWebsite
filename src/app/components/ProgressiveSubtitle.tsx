import { useState, useEffect } from 'react';

export function ProgressiveSubtitle() {
  const [textStep, setTextStep] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    timers.push(setTimeout(() => setTextStep(1), 700));
    timers.push(setTimeout(() => setTextStep(2), 1400));
    timers.push(setTimeout(() => setTextStep(3), 2100));
    timers.push(setTimeout(() => setTextStep(4), 2800));
    timers.push(setTimeout(() => setTextStep(5), 3500));

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const getDisplayText = () => {
    switch(textStep) {
      case 0:
        return 'Your eyes';
      case 1:
        return 'Your eyes, your ears';
      case 2:
        return 'Your eyes, your ears, your choice.';
      case 3:
        return 'Your eyes, your ears, your choice.\nYour data';
      case 4:
        return 'Your eyes, your ears, your choice.\nYour data, your apps';
      case 5:
      default:
        return 'Your eyes, your ears, your choice.\nYour data, your apps, your glasses.';
    }
  };

  return (
    <div className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[36px] text-center whitespace-pre-line">
      {getDisplayText()}
    </div>
  );
}
