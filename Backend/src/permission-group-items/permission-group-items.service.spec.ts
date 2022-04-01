import { Test, TestingModule } from '@nestjs/testing';
import { PermissionGroupItemsService } from './permission-group-items.service';

describe('PermissionGroupItemsService', () => {
  let service: PermissionGroupItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionGroupItemsService],
    }).compile();

    service = module.get<PermissionGroupItemsService>(
      PermissionGroupItemsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
