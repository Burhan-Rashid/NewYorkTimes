import { render, screen } from '@testing-library/react';
import Loader from './index';
import { describe, it, expect } from 'vitest';

describe('Loader', () => {
  it('renders loading text', () => {
    render(<Loader />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
}); 