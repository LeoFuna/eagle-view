import React from 'react';
import { render } from '@testing-library/react';
import OverviewDashboard from '../components/OverviewDashboard';

describe('Ao renderizar ao aplicação', () => {
  test('todos os elementos do Header devem estar à mostra', () => {
    const { getByText, getAllByDisplayValue } = render(<OverviewDashboard />);
    expect(getByText('Eagle View')).toBeInTheDocument();
    expect(getByText('Empresa')).toBeInTheDocument();
    expect(getByText('Unidade')).toBeInTheDocument();
    expect(getAllByDisplayValue('Todas').length).toBe(2);
  });
})
