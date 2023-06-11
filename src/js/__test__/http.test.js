import { httpGet, httpPost } from '../http';

describe('httpGet', () => {
  test('should throw an error with the provided URL', () => {
    const url = 'http://example.com';
    expect(() => {
      httpGet(url);
    }).toThrow(url);
  });
});

describe('httpPost', () => {
  test('should throw an error with the provided URL', () => {
    const url = 'http://example.com';
    expect(() => {
      httpPost(url);
    }).toThrow(url);
  });
});
