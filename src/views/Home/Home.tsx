import { useEffect } from 'react';
import { useQuotation } from '../../hooks/useQuotation';
import {
  Container, Title, Quotation, QuotationContainer,
} from './style';
import { formatter } from '../../global/utils';

export function Home() {
  const { quotations, getQuotations } = useQuotation();

  useEffect(() => {
    getQuotations();
  }, []);

  return (
    <Container>
      <QuotationContainer>
        <Title>{quotations.USDBRL?.name}</Title>
        <Quotation>
          Purchase:
          {' '}
          {formatter.format(Number(quotations.USDBRL?.bid))}
        </Quotation>
        <Quotation>
          Sell:
          {' '}
          {formatter.format(Number(quotations.USDBRL?.ask))}
        </Quotation>
      </QuotationContainer>
    </Container>
  );
}
