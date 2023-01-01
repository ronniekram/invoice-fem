import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Client } from "@prisma/client";
import { ClientService } from "./client.service";

type ClientInput = Omit<Client, "id" | "biller" | "createdAt" | "updatedAt">

@Controller()
export class ClientController {
  constructor(
    private readonly clientService: ClientService,
  ) { }

  @Get(`client/:id`)
  async getClientById(@Param(`id`) id: string): Promise<Client> {
    return this.clientService.client({ id: Number(id) });
  };

  @Post(`client`)
  async signupClient(@Body() clientData: ClientInput): Promise<Client> {
    return this.clientService.createClient(clientData);
  };

  @Put(`client/:id`)
  async editClient(@Param(`id`) id: string, @Body() userData: ClientInput): Promise<Client> {
    return this.clientService.updateClient({
      where: { id: Number(id) },
      data: userData,
    });
  };

  @Delete(`client/:id`)
  async deleteClient(@Param(`id`) id: string): Promise<Client> {
    return this.clientService.deleteClient({ id: Number(id) });
  };

};
