import { CounsellingModule } from './counselling.module';

describe('CounsellingModule', () => {
  let counsellingModule: CounsellingModule;

  beforeEach(() => {
    counsellingModule = new CounsellingModule();
  });

  it('should create an instance', () => {
    expect(counsellingModule).toBeTruthy();
  });
});
