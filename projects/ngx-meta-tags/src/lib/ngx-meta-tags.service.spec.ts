import { TestBed } from '@angular/core/testing';

import { NgxMetaTagsService } from './ngx-meta-tags.service';
import { NgxMetaTagsModule } from './ngx-meta-tags.module';

describe('NgxMetaTagsService', () => {
  let service: NgxMetaTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxMetaTagsModule.forRoot({})]
    });
    service = TestBed.inject(NgxMetaTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
