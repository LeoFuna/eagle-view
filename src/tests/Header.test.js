import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Ao renderizar ao aplicação', () => {
  test('todos os elementos do Header devem estar à mostra', () => {
    const { getByText, getAllByDisplayValue } = render(<Header />);
    expect(getByText('Eagle View')).toBeInTheDocument();
    expect(getByText('Empresa')).toBeInTheDocument();
    expect(getByText('Unidade')).toBeInTheDocument();
    expect(getAllByDisplayValue('Todas').length).toBe(2);
  });
})
