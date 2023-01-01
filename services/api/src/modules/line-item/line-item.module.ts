import { Module } from "@nestjs/common";
import { LineItemController } from "./line-item.controller";
import { LineItemService } from "./line-item.service";

@Module({
  imports: [],
  controllers: [LineItemController],
  providers: [LineItemService],
})

export class LineItemModule { };
