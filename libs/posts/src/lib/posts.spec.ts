import { getPosts } from './posts';

describe('posts', () => {
  it('should work', () => {
    expect(getPosts()).toEqual('posts');
  });
});
