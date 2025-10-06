import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { countdownConfig } from '../config/countdown';

interface CountdownContextType {
  isCountdownActive: boolean;
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  isLaunched: boolean;
  isDismissed: boolean;
  dismissCountdown: () => void;
  showCountdown: () => void;
}

const CountdownContext = createContext<CountdownContextType | undefined>(undefined);

export function CountdownProvider({ children }: { children: ReactNode }) {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isLaunched, setIsLaunched] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (!countdownConfig.enabled) {
      setIsLaunched(true);
      return;
    }

    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const launchTime = new Date(countdownConfig.launchTime).getTime();
      const difference = launchTime - now;

      if (difference <= 0) {
        setIsLaunched(true);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  const dismissCountdown = () => {
    setIsDismissed(true);
  };

  const showCountdown = () => {
    setIsDismissed(false);
  };

  return (
    <CountdownContext.Provider
      value={{
        isCountdownActive: countdownConfig.enabled && !isLaunched,
        timeRemaining,
        isLaunched,
        isDismissed,
        dismissCountdown,
        showCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

export function useCountdown() {
  const context = useContext(CountdownContext);
  if (context === undefined) {
    throw new Error('useCountdown must be used within a CountdownProvider');
  }
  return context;
}
