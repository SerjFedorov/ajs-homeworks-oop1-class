import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('saveUser throws an error', () => {
  expect(() => {
    // eslint-disable-next-line no-undef
    saveUser({ name: 'Serj Serj', email: '1234@test.com' });
  }).toThrow('Unimplemented');
});
