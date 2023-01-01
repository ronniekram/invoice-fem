import { Injectable } from "@nestjs/common";
import { LineItem, Prisma } from "@prisma/client";

import { PrismaService } from "api/src/prisma.service";

@Injectable()
export class LineItemService {
  constructor(private prisma: PrismaService) { }

  async lineItem(
    LineItemWhereUniqueInput: Prisma.LineItemWhereUniqueInput
  ): Promise<LineItem | null> {
    return this.prisma.lineItem.findUnique({
      where: LineItemWhereUniqueInput,
    });
  }

  async lineItems(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LineItemWhereUniqueInput;
    where?: Prisma.LineItemWhereInput;
    orderBy?: Prisma.LineItemOrderByWithRelationInput;
  }): Promise<LineItem[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.lineItem.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createLineItem(data: Prisma.LineItemCreateInput): Promise<LineItem> {
    return this.prisma.lineItem.create({
      data,
    });
  }

  async updateLineItem(params: {
    where: Prisma.LineItemWhereUniqueInput;
    data: Prisma.LineItemUpdateInput;
  }): Promise<LineItem> {
    const { where, data } = params;
    return this.prisma.lineItem.update({
      data,
      where,
    });
  }

  async deleteLineItem(where: Prisma.LineItemWhereUniqueInput): Promise<LineItem> {
    return this.prisma.lineItem.delete({
      where,
    });
  }
}
