import { GlobalsharedModule } from './globalshared.module';

describe('GlobalsharedModule', () => {
  let globalsharedModule: GlobalsharedModule;

  beforeEach(() => {
    globalsharedModule = new GlobalsharedModule();
  });

  it('should create an instance', () => {
    expect(globalsharedModule).toBeTruthy();
  });
});
