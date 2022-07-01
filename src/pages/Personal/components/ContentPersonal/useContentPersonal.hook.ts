import { useState } from 'react';

export const useContentPersonal = () => {
  const [isExchangeOpen, setExchangeOpen] = useState<boolean>(false);
  const handlerSetExchangeOpen = () => {
    setExchangeOpen((pervIsExchangeOpen) => !pervIsExchangeOpen);
  };

  const [isUSDBuyOpen, setIsUSDBuyOpen] = useState(false);
  const handlerSetIsUSDBuyOpen = () => {
    setIsUSDBuyOpen((prevValue) => !prevValue);
  };

  return {
    isExchangeOpen,
    handlerSetExchangeOpen,

    isUSDBuyOpen,
    handlerSetIsUSDBuyOpen,
  };
};
