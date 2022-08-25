import { HttpClient } from './HttpClient';

describe('HttpClient', () => {
  let subject: HttpClient;

  beforeEach(() => {
    subject = new HttpClient();
  });

  describe('when perform a GET request', () => {
    it('should return requested object', async () => {
      const test = { test: 'test' };
      global.fetch = jest.fn(() => fetchSuccess(test)) as jest.Mock;

      const actual = await subject.get('/test');

      expect(actual).toEqual(test);
    });

    it('should throw an error', () => {
        const test = { test: 'test' };
        global.fetch = jest.fn(fetchError) as jest.Mock;
    
        const error = subject.get('/test');

        expect(error).rejects.toThrow();
      });
  });

  describe('when perform a POST request', () => {
    it('should return requested object', async () => {
      const test = { test: 'test' };
      global.fetch = jest.fn(() => fetchSuccess(test)) as jest.Mock;

      const actual = await subject.post('/test', { foo: 'bar'});

      expect(actual).toEqual(test);
    });

    it('should throw an error', () => {
        const test = { test: 'test' };
        global.fetch = jest.fn(fetchError) as jest.Mock;
    
        const error = subject.post('/test', { foo: 'bar'});

        expect(error).rejects.toThrow();
      });
  });

  describe('when perform a POST request', () => {
    it('should return requested object', async () => {
      const test = { test: 'test' };
      global.fetch = jest.fn(() => fetchSuccess(test)) as jest.Mock;

      const actual = await subject.post('/test', { foo: 'bar'});

      expect(actual).toEqual(test);
    });

    it('should throw an error', () => {
        const test = { test: 'test' };
        global.fetch = jest.fn(fetchError) as jest.Mock;
    
        const error = subject.post('/test', { foo: 'bar'});

        expect(error).rejects.toThrow();
      });
  });

  describe('when perform a PUT request', () => {
    it('should return requested object', async () => {
      const test = { test: 'test' };
      global.fetch = jest.fn(() => fetchSuccess(test)) as jest.Mock;

      const actual = await subject.patch('/PUT', { foo: 'bar'});

      expect(actual).toEqual(test);
    });

    it('should throw an error', () => {
        const test = { test: 'test' };
        global.fetch = jest.fn(fetchError) as jest.Mock;
    
        const error = subject.put('/test', { foo: 'bar'});

        expect(error).rejects.toThrow();
      });
  });

  describe('when perform a PATCH request', () => {
    it('should return requested object', async () => {
      const test = { test: 'test' };
      global.fetch = jest.fn(() => fetchSuccess(test)) as jest.Mock;

      const actual = await subject.patch('/test', { foo: 'bar'});

      expect(actual).toEqual(test);
    });

    it('should throw an error', () => {
        const test = { test: 'test' };
        global.fetch = jest.fn(fetchError) as jest.Mock;
    
        const error = subject.patch('/test', { foo: 'bar'});

        expect(error).rejects.toThrow();
      });
  });

  describe('when perform a DELETE request', () => {
    it('should return requested object', async () => {
      const test = { test: 'test' };
      global.fetch = jest.fn(() => fetchSuccess(test)) as jest.Mock;

      const actual = await subject.delete('/test/123');

      expect(actual).toEqual(test);
    });

    it('should throw an error', () => {
        const test = { test: 'test' };
        global.fetch = jest.fn(fetchError) as jest.Mock;
    
        const error = subject.delete('/test/123');

        expect(error).rejects.toThrow();
      });
  });

  const fetchSuccess = (data: any) => Promise.resolve({ json: () => Promise.resolve(data) });
  const fetchError = () => Promise.reject(new Error('Unable to fetch url'));
});
