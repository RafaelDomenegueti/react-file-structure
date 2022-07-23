import Api from '../api';

export async function requestQuotations() {
  return Api.get('json/last/USD-BRL,EUR-BRL,BTC-BRL');
}
