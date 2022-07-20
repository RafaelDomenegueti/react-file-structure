import { createContext, useState } from "react";
import { requestQuotations } from "../../services/quotation/requestQuotations";
import { QuotationContextData, QuotationsDataResponse, QuotationProviderProps } from "./types";

export const QuotationContext = createContext({} as QuotationContextData);

export function QuotationProvider({ children }: QuotationProviderProps) {
  const [quotations, setQuotations] = useState({} as QuotationsDataResponse);

  async function getQuotations() {
    const { data } = await requestQuotations()

    setQuotations(data);
  };

  return (
    <QuotationContext.Provider 
      value={{
        quotations,
        getQuotations
      }}
    >
      {children}
    </QuotationContext.Provider>
  );
};