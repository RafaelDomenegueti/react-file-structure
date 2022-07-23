import { cloneElement } from 'react';
import { ContextProviderProps, ProviderComposerProps } from './types';
import { QuotationProvider } from '../useQuotation';

const providers = [
  QuotationProvider,
];

const ProviderComposer = ({ contexts, children }: ProviderComposerProps) => contexts.reduce(
  (kids, Parent) => cloneElement(<Parent />, {
    children: kids,
  }),
  children,
);

function ContextProvider({ children }: ContextProviderProps) {
  return (
    <ProviderComposer
      contexts={providers}
    >
      {children}
    </ProviderComposer>
  );
}

export default ContextProvider;
