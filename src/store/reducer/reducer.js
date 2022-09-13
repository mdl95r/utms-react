import { UTMS_ACTIONS } from './constants';

export const reducer = (state, action) => {
  switch (action.type) {
    case UTMS_ACTIONS.setValues:
      return {
        ...state,
        values: { ...state.values, ...action.payload },
      };

    case UTMS_ACTIONS.setFields:
      return {
        ...state,
        fields: { ...state.fields, ...action.payload },
      };

    case UTMS_ACTIONS.setBaseURL:
      return {
        ...state,
        baseURL: { ...state.baseURL, ...action.payload },
      };

    case UTMS_ACTIONS.setDisableButton:
      return {
        ...state,
        disableButton: action.payload,
      };

    case UTMS_ACTIONS.setVisiblePopup:
      return {
        ...state,
        isVisiblePopup: action.payload,
      };

    default: {
      return state;
    }
  }
};
