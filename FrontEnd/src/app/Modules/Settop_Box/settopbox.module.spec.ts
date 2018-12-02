import { SettopboxModule } from './settopbox.module';

describe('SettopboxModule', () => {
  let settopboxModule: SettopboxModule;

  beforeEach(() => {
    settopboxModule = new SettopboxModule();
  });

  it('should create an instance', () => {
    expect(settopboxModule).toBeTruthy();
  });
});
