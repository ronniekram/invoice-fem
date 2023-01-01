import { Injectable } from "@nestjs/common";
import { Invoice, Prisma } from "@prisma/client";

import { PrismaService } from "api/src/prisma.service";

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) { }

  async invoice(InvoiceWhereUniqueInput: Prisma.InvoiceWhereUniqueInput): Promise<Invoice | null> {
    return this.prisma.invoice.findUnique({
      where: InvoiceWhereUniqueInput,
    });
  }

  async invoices(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.InvoiceWhereUniqueInput;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput;
  }): Promise<Invoice[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.invoice.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createInvoice(data: Prisma.InvoiceCreateInput): Promise<Invoice> {
    return this.prisma.invoice.create({
      data,
    });
  }

  async updateInvoice(params: {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.InvoiceUpdateInput;
  }): Promise<Invoice> {
    const { data, where } = params;
    return this.prisma.invoice.update({
      data,
      where,
    });
  }

  async deleteInvoice(where: Prisma.InvoiceWhereUniqueInput): Promise<Invoice> {
    return this.prisma.invoice.delete({
      where,
    });
  }
}
