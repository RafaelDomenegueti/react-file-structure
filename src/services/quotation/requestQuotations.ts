import { AxiosResponse } from 'axios';
import { QuotationsDataResponse } from '../../hooks/useQuotation/types';
import Api from '../api';

export async function requestQuotations(): Promise<AxiosResponse<QuotationsDataResponse>> {
  return Api.get<QuotationsDataResponse>('json/last/USD-BRL');
}
