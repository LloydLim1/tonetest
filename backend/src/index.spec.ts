import { SERVICE_NAME } from './index';

describe('tonetest-backend', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('tonetest-backend');
  });
});