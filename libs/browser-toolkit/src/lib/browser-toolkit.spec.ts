import { browserToolkit } from './browser-toolkit';

describe('browserToolkit', () => {
  it('should work', () => {
    expect(browserToolkit()).toEqual('browser-toolkit');
  });
});
