import { render } from '@testing-library/react';

import DateComponent from './date.component';

describe('Date', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateComponent />);
    expect(baseElement).toBeTruthy();
  });
});
