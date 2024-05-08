import { useEffect } from 'react';

function TabTitleChanger() {
  useEffect(() => {
    const originalTitle = "Farooq Basheer";
    const tempTitle = "Comeback 😢";
    const handleVisibilityChange = () => {
      document.title = !document.hidden ? originalTitle : tempTitle;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
}

export default TabTitleChanger;
