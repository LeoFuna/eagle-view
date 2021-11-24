import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Ao renderizar ao aplicação', () => {
  test('todos os elementos do Overview Dashbord devem estar à mostra', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('main-overview-div')).toBeInTheDocument();
  });
})
