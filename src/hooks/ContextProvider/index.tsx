
import { cloneElement } from 'react';
import { ContextProviderProps, ProviderComposerProps } from './types';
import { ProfileProvider } from '../useProfile';

const contexts = [
  // <ThemeContextProvider />,
  <ProfileProvider children={undefined} />,
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
