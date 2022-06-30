import { useState } from 'react';

export const useContentPersonal = () => {
  const [isExchangeOpen, setExchangeOpen] = useState<boolean>(false);
  const handlerSetExchangeOpen = () => {
    setExchangeOpen((pervIsExchangeOpen) => !pervIsExchangeOpen);
  };

  return { isExchangeOpen, handlerSetExchangeOpen };
};
