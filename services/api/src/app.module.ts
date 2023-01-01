import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma.service";

import { ClientController } from "./modules/client/client.controller";
import { ClientService } from "./modules/client/client.service";

import { InvoiceController } from "./modules/invoice/invoice.controller";
import { InvoiceService } from "./modules/invoice/invoice.service";

import { LineItemController } from "./modules/line-item/line-item.controller";
import { LineItemService } from "./modules/line-item/line-item.service";

import { UserController } from "./modules/user/user.controller";
import { UserService } from "./modules/user/user.service";
@Module({
  imports: [],
  controllers: [AppController, ClientController, InvoiceController, LineItemController, UserController],
  providers: [PrismaService, AppService, ClientService, InvoiceService, LineItemService, UserService],
})
export class AppModule { }
