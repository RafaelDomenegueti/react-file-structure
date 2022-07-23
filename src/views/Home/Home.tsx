import { useEffect } from 'react';
import { useQuotation } from '../../hooks/useQuotation';
import {
  Container,
  Title,
} from './style';

export function Home() {
  const { quotations, getQuotations } = useQuotation();

  useEffect(() => {
    getQuotations();
  }, []);

  return (
    <Container>
      <Title>{quotations.BTCBRL?.name}</Title>
    </Container>
  );
}
