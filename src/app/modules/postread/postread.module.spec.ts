import { PostreadModule } from './postread.module';

describe('PostreadModule', () => {
  let postreadModule: PostreadModule;

  beforeEach(() => {
    postreadModule = new PostreadModule();
  });

  it('should create an instance', () => {
    expect(postreadModule).toBeTruthy();
  });
});
