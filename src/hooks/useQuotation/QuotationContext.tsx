import { createContext, useMemo, useState } from 'react';
import { requestQuotations } from '../../services/quotation/requestQuotations';
import { QuotationContextData, QuotationsDataResponse, QuotationProviderProps } from './types';

export const QuotationContext = createContext({} as QuotationContextData);

export function QuotationProvider({ children }: QuotationProviderProps) {
  const [quotations, setQuotations] = useState<QuotationsDataResponse>({});

  async function getQuotations() {
    const { data } = await requestQuotations();

    setQuotations(data);
  }

  const value = useMemo(() => ({
    quotations,
    getQuotations,
  }), [quotations]);

  return (
    <QuotationContext.Provider
      value={value}
    >
      {children}
    </QuotationContext.Provider>
  );
}
