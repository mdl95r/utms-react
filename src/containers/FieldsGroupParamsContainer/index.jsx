import React from 'react';
import styles from './styles.module.scss';
import { FieldItems, Title } from 'components';
import { Context } from 'store';
import { UTMS_ACTIONS } from 'store/reducer/constants';
import { FieldItem } from 'components/FieldItem';

const items = [
  {
    label: 'Источник кампании',
    name: 'utm_source',
    placeholder: 'google, yandex, vk, facebook',
  },
  {
    label: 'Тип трафика',
    name: 'utm_medium',
    placeholder: 'cpc, email, banner, article',
  },
  {
    label: 'Название кампании',
    name: 'utm_campaign',
    hint: 'utm_campaign_hint',
    placeholder: 'cpc, email, banner, article',
  },
  {
    label: 'Идентификатор объявления',
    name: 'utm_content',
    hint: 'utm_content_hint',
    placeholder: 'link, landing page',
  },
  {
    label: 'Ключевое слово',
    name: 'utm_term',
    hint: 'utm_term_hint',
    placeholder: 'free, -30%, registration',
  },
];

export const FieldsGroupParamsContainer = () => {
  const [state, dispatch] = React.useContext(Context);

  const getInputValue = (inputs, id) => {
    dispatch({
      type: UTMS_ACTIONS.setValues,
      payload: { [id]: inputs },
    });

    dispatch({
      type: UTMS_ACTIONS.setFields,
      payload: { [id]: inputs },
    });
  };

  return (
    <>
      <Title name="Обязательные параметры" classes={styles.title} />
      <Title name="Необязательные параметры" classes={styles.title} />
      <FieldItems
        getInputValue={getInputValue}
        items={items}
        classes={styles}
        values={state?.values}
        renderField={(props) => <FieldItem key={props.name} {...props} />}
      />
    </>
  );
};
