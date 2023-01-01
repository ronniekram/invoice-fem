import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Invoice } from "@prisma/client";
import { InvoiceService } from "./invoice.service";

type InvoiceInput = Omit<Invoice, "id" | "biller" | "client" | "createdAt" | "updatedAt">

@Controller()
export class UserController {
  constructor(
    private readonly invoiceService: InvoiceService,
  ) { }

  @Get(`invoice/:id`)
  async getUserById(@Param(`id`) id: string): Promise<Invoice> {
    return this.invoiceService.invoice({ id: Number(id) });
  };

  @Post(`invoice`)
  async signupUser(@Body() invoiceData: InvoiceInput): Promise<Invoice> {
    return this.invoiceService.createInvoice(invoiceData);
  };

  @Put(`invoice/:id`)
  async editUser(@Param(`id`) id: string, @Body() invoiceData: InvoiceInput): Promise<Invoice> {
    return this.invoiceService.updateInvoice({
      where: { id: Number(id) },
      data: invoiceData,
    });
  };

  @Delete(`invoice/:id`)
  async deleteUser(@Param(`id`) id: string): Promise<Invoice> {
    return this.invoiceService.deleteInvoice({ id: Number(id) });
  };

};
