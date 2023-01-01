import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { LineItem } from "@prisma/client";
import { LineItemService } from "./line-item.service";

type LineItemInput = Omit<LineItem, "id" | "invoice" | "createdAt" | "updatedAt">

@Controller()
export class LineItemController {
  constructor(
    private readonly lineItemService: LineItemService,
  ) { }

  @Get(`line-item/:id`)
  async getUserById(@Param(`id`) id: string): Promise<LineItem> {
    return this.lineItemService.lineItem({ id: Number(id) });
  };

  @Post(`line-item`)
  async signupUser(@Body() invoiceData: LineItemInput): Promise<LineItem> {
    return this.lineItemService.createLineItem(invoiceData);
  };

  @Put(`line-item/:id`)
  async editUser(@Param(`id`) id: string, @Body() invoiceData: LineItemInput): Promise<LineItem> {
    return this.lineItemService.updateLineItem({
      where: { id: Number(id) },
      data: invoiceData,
    });
  };

  @Delete(`line-item/:id`)
  async deleteUser(@Param(`id`) id: string): Promise<LineItem> {
    return this.lineItemService.deleteLineItem({ id: Number(id) });
  };

};
