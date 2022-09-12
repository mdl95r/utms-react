export const hints = {
  google: {
    utm_campaign_hint:
      "Вместо {network} Google Adwords подставит 'g' (поиск), 's' (поисковый партнер) или 'd' (КМС)",
    utm_content_hint:
      'Вместо {creative} Google Adwords автоматически подставит ID объявления',
    utm_term_hint:
      'Вместо {keyword} Google Adwords автоматически подставит ключевое слово',
  },
  yandex: {
    utm_campaign_hint:
      'Вместо {campaign_id} Яндекс.Директ автоматически подставит ID кампании',
    utm_content_hint:
      'Вместо {ad_id} Яндекс.Директ автоматически подставит ID объявления',
    utm_term_hint:
      'Вместо {keyword} Яндекс.Директ автоматически подставит ключевое слово',
  },
  vk: {
    utm_campaign_hint:
      'Вместо {campaign_id} Вконтакте автоматически подставит ID объявления',
    utm_content_hint:
      'Вместо {ad_id} Вконтакте автоматически подставит ID объявления',
    utm_term_hint: null,
  },
  facebook: {
    utm_campaign_hint: null,
    utm_content_hint: null,
    utm_term_hint: null,
  },
  defaultState: {
    utm_campaign_hint: null,
    utm_content_hint: null,
    utm_term_hint: null,
  },
};
