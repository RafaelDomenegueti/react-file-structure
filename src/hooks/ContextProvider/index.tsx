
import { cloneElement } from 'react';
import { ContextProviderProps, ProviderComposerProps } from './types';
import { QuotationProvider } from '../useQuotation';

const contexts = [
  <QuotationProvider children={undefined} />,
];

const ProviderComposer = ({ contexts, children }: ProviderComposerProps) => contexts.reduce((kids, parent) => cloneElement(parent, { children: kids }), children);

const ContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <ProviderComposer
      contexts={contexts}
    >
      {children}
    </ProviderComposer>
  );
};

export default ContextProvider;
