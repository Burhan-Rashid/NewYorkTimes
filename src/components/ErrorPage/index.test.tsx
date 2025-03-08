import { render, screen } from '@testing-library/react';
import ErrorPage from './index';
import { describe, it, expect } from 'vitest';

describe('ErrorPage', () => {
  it('renders error message', () => {
    const errorMessage = 'Test error message';
    render(<ErrorPage errorMessage={errorMessage} />);
    
    expect(screen.getByText('Oops! Something went wrong.')).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
}); 