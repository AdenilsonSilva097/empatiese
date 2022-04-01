import { Test, TestingModule } from '@nestjs/testing';
import { PermissionGroupItemsController } from './permission-group-items.controller';

describe('PermissionGroupItemsController', () => {
  let controller: PermissionGroupItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermissionGroupItemsController],
    }).compile();

    controller = module.get<PermissionGroupItemsController>(
      PermissionGroupItemsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
