import { OperatorsModule } from './operators.module';

describe('OperatorsModule', () => {
  let operatorsModule: OperatorsModule;

  beforeEach(() => {
    operatorsModule = new OperatorsModule();
  });

  it('should create an instance', () => {
    expect(operatorsModule).toBeTruthy();
  });
});
