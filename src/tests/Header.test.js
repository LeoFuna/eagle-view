import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Ao renderizar ao aplicação', () => {
  test('todos os elementos do Header devem estar à mostra', async () => {
    const { getByText } = render(<App />);
    expect(getByText('Eagle View')).toBeInTheDocument();
    expect(getByText('Empresa')).toBeInTheDocument();
    expect(getByText('Unidade')).toBeInTheDocument();
  });
})
