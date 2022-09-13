import React from 'react';
import { Group, InputWrap, Title, Hint, Form } from 'components';
import Store from 'store/index.js';
import {
  FieldsGroupParamsContainer,
  InputAddressContainer,
  InputDropDownContainer,
  OutputAddressContainer,
  RadioGroupSourcesContainer,
  PopupContainer,
} from 'containers';

export function App() {
  return (
    <Store>
      <div className="container">
        <Hint />
        <Form>
          <Title name="Адрес вашей страницы" />
          <InputWrap>
            <InputDropDownContainer />

            <InputAddressContainer />
          </InputWrap>

          <Title name="Источник трафика" />

          <Group type="radio">
            <RadioGroupSourcesContainer />
          </Group>

          <Group type="edit">
            <FieldsGroupParamsContainer />
          </Group>

          <Title name="Результат" />

          <OutputAddressContainer />
        </Form>
      </div>
      <PopupContainer />
    </Store>
  );
}
