import React, { FC } from 'react';

import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import { getBeautifyAmount } from '../../Personal.utils';
import { CoinItem, Diagramm, InputExchange, InputUSD } from '../index';
import styles from './ContentPersonal.module.scss';
import { useContentPersonal } from './useContentPersonal.hook';

interface ContentPersonalProps {
  currenciesData: CurrenciesData;
}

export const ContentPersonal: FC<ContentPersonalProps> = ({ currenciesData }) => {
  const {
    walletData,
    useInputData,

    isExchangeOpen,
    handlerSetExchangeOpen,

    isUSDBuyOpen,
    handlerSetIsUSDBuyOpen,

    walletAmount,
    walletData2USD,
  } = useContentPersonal(currenciesData);

  const CoinItems = Object.values(currenciesData).map((currency) => {
    const coinAmount = getBeautifyAmount(walletData[currency.name], 4);
    const coinAmountUSD = getBeautifyAmount(currency.price * walletData[currency.name]);
    return (
      <CoinItem
        key={currency.id}
        coinName={currency.name}
        coinAmountUSD={coinAmountUSD}
        coinAmount={coinAmount}
      />
    );
  });

  return (
    <div className={styles.layout}>
      <div className={styles.heading}>
        <h3 className={styles.heading__title}>Баланс аккаунта</h3>
        <p className={styles.heading__balance}>
          {walletAmount} <span>USD</span>
        </p>
      </div>

      <div className={styles.content}>
        <Diagramm walletData2USD={walletData2USD} />

        <div className={styles.content__coins}>
          {CoinItems}
          <div className={styles.content__buttons}>
            <button className={styles.content__buttons_button} onClick={handlerSetIsUSDBuyOpen}>
              <span>Купить</span>
            </button>
            <button className={styles.content__buttons_button} onClick={handlerSetExchangeOpen}>
              <span>Обменять</span>
            </button>
          </div>
        </div>

        {isExchangeOpen && <InputExchange useInputData={useInputData} />}
        {isUSDBuyOpen && <InputUSD useInputData={useInputData} />}
      </div>
    </div>
  );
};
