import { render } from '@testing-library/react';

import DateComponent from './date.component';

describe('Date', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateComponent  date={'2019-09-25T14:34:32.999Z'}/>);
    expect(baseElement).toBeTruthy();
  });
});
