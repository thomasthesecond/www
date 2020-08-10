import React from 'react';
import { Header } from './Header';

export const AptibleLayout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
 