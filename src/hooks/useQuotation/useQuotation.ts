import { useContext } from "react";
import { QuotationContext, QuotationProvider } from "./QuotationContext";

function useQuotation() {
  const quotation = useContext(QuotationContext);

  return quotation;
}

export { useQuotation, QuotationProvider }
