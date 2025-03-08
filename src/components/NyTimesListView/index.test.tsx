import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NyTimesListView from './index';
import { describe, it, expect } from 'vitest';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('NyTimesListView', () => {
  it('renders loading state initially', () => {
    render(<NyTimesListView />, { wrapper });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders articles after loading', async () => {
    render(<NyTimesListView />, { wrapper });
    
    await waitFor(() => {
      expect(screen.getByText('Test Article 1')).toBeInTheDocument();
      expect(screen.getByText('Test Article 2')).toBeInTheDocument();
    });
  });

  it('changes duration when select value changes', async () => {
    const user = userEvent.setup();
    render(<NyTimesListView />, { wrapper });

    await waitFor(() => {
      expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    });

    const select = screen.getByRole('combobox');
    await user.selectOptions(select, '7');
    
    expect(select).toHaveValue('7');
  });
}); 