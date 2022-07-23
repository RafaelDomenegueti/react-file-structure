import { ReactNode } from 'react';

export interface QuotationsDataResponse {
  USDBRL?: {
    code: string,
    codein: string,
    name: string,
    high: string,
    low: string,
    varBid: string,
    pctChange: string,
    bid: string,
    ask: string,
    timestamp: string,
    create_date: string,
  },
  EURBRL?: {
    code: string,
    codein: string,
    name: string,
    high: string,
    low: string,
    varBid: string,
    pctChange: string,
    bid: string,
    ask: string,
    timestamp: string,
    create_date: string,
  },
  BTCBRL?: {
    code: string,
    codein: string,
    name: string,
    high: string,
    low: string,
    varBid: string,
    pctChange: string,
    bid: string,
    ask: string,
    timestamp: string,
    create_date: string,
  }
}

export interface QuotationContextData {
  getQuotations: () => Promise<void>,
  quotations: QuotationsDataResponse,
}

export interface QuotationProviderProps {
  children: ReactNode;
}
