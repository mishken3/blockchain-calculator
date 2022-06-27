import React, { FC, useState } from 'react';

import { Input, ReverseTabsButton, useContent } from '../../../../components';
import { Wallet } from '../../../../redux/reducers/wallet/types';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import { getBeautifyAmount } from '../../Personal.utils';
import { CoinItem } from '../CoinItem';
import { Diagramm } from '../Diagramm';
import styles from './ContentPersonal.module.scss';

interface ContentPersonalProps {
  walletAmount: string;
  walletData: Wallet;
  currenciesData: CurrenciesData;
}

export const ContentPersonal: FC<ContentPersonalProps> = ({
  walletAmount,
  walletData,
  currenciesData,
}) => {
  const [isExchangeOpen, setExchangeOpen] = useState(false);
  const handlerSetExchangeOpen = () => {
    setExchangeOpen((pervIsExchangeOpen) => !pervIsExchangeOpen);
  };

  const {
    exchangeInputCourse,
    exchangeConversionInputCourse,

    converterData,

    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
  } = useContent(currenciesData);

  const CoinItems = Object.values(currenciesData).map((currency) => {
    const coinAmount = walletData[currency.name];
    const coinAmountUSD = currency.price * walletData[currency.name];
    const beautifyCoinAmount = getBeautifyAmount(coinAmountUSD);
    return (
      <CoinItem
        key={currency.id}
        coinName={currency.name}
        coinAmount={coinAmount}
        coinAmountUSD={beautifyCoinAmount}
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
        <Diagramm walletAmount={walletAmount} />

        <div className={styles.content__coins}>
          {CoinItems}
          <button className={styles.content__coins_button} onClick={handlerSetExchangeOpen}>
            <span>Обменять</span>
          </button>
        </div>

        {isExchangeOpen ? (
          <div className={styles.content__exchange}>
            <Input
              title="Хочу продать"
              handleOnClick={selectInputTab}
              selectedCurrency={converterData.inputTab}
              editable
              value={converterData.input}
              onChange={changeInput}
              exchangeCourse={exchangeInputCourse}
            />

            <ReverseTabsButton reverseTabs={reverseTabs} />

            <Input
              title="Хочу приобрести"
              handleOnClick={selectOutputTab}
              selectedCurrency={converterData.outputTab}
              editable={false}
              value={converterData.output}
              exchangeCourse={exchangeConversionInputCourse}
            />

            <button className={styles.content__exchange_trade}>Купить</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
