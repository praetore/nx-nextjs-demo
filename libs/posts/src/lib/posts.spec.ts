import { getPosts } from './posts';

describe('posts', () => {
  it('should work', () => {
    const expected = [
      {
        "date": "2020-01-02",
        "id": "ssg-ssr",
        "title": "When to Use Static Generation v.s. Server-side Rendering"
      },
      {
        "date": "2020-01-01",
        "id": "pre-rendering",
        "title": "Two Forms of Pre-rendering"
      }
    ];
    expect(getPosts()).toEqual(expected);
  });
});
