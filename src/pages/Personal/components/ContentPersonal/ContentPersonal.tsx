import React, { FC, useState } from 'react';

import { Input, ReverseTabsButton, useContent } from '../../../../components';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import { Diagramm } from '../Diagramm';
import styles from './ContentPersonal.module.scss';

interface ContentPersonalProps {
  walletAmount: string;
  coinItems: React.ReactElement[];
  currenciesData: CurrenciesData;
}

export const ContentPersonal: FC<ContentPersonalProps> = ({
  walletAmount,
  coinItems,
  currenciesData,
}) => {
  const [isExchangeOpen, setExchangeOpen] = useState(false);
  console.log('isExchangeOpen :>> ', isExchangeOpen);
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
          {coinItems}
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
