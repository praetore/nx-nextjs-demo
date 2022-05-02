import { render } from '@testing-library/react';

import LayoutComponent from './layout.component';

describe('LayoutComponent', () => {
  it('should render successfully', () => {
    const name = "Hello";
    const siteTitle = "Whyy me?";
    const { baseElement } = render(<LayoutComponent siteTitle={siteTitle} name={name}/>);
    expect(baseElement).toBeTruthy();
  });
});
