/* eslint-disable vitest/valid-title */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UserProfile from '../../pages/dz/dz49/UserProfile';
import { MOCK_USER } from '../../constants';
import { DZ49_SCENARIOS } from '../dz49.scenarios';

describe('UserProfile', () => {
  it(DZ49_SCENARIOS[0].name, () => {
    render(<UserProfile fetchFn={DZ49_SCENARIOS[0].fetchFn} />);
    expect(screen.getByText(DZ49_SCENARIOS[0].expectedText)).toBeInTheDocument();
  });

  it(DZ49_SCENARIOS[1].name, async () => {
    render(<UserProfile fetchFn={DZ49_SCENARIOS[1].fetchFn} />);
    expect(await screen.findByText(MOCK_USER.name)).toBeInTheDocument();
    expect(screen.getByText(MOCK_USER.email)).toBeInTheDocument();
    expect(screen.getByText(MOCK_USER.phone)).toBeInTheDocument();
  });

  it(DZ49_SCENARIOS[2].name, async () => {
    render(<UserProfile fetchFn={DZ49_SCENARIOS[2].fetchFn} />);
    expect(await screen.findByText(DZ49_SCENARIOS[2].expectedText)).toBeInTheDocument();
  });
});
