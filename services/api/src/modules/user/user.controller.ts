import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { User } from "@prisma/client";
import { UserService } from "./user.service";

type UserInput = Omit<User, "id" | "createdAt" | "updatedAt">

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Get(`user/:id`)
  async getUserById(@Param(`id`) id: string): Promise<User> {
    return this.userService.user({ id: Number(id) });
  };

  @Post(`user`)
  async signupUser(@Body() userData: UserInput): Promise<User> {
    return this.userService.createUser(userData);
  };

  @Put(`user/:id`)
  async editUser(@Param(`id`) id: string, @Body() userData: UserInput): Promise<User> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  };

  @Delete(`user/:id`)
  async deleteUser(@Param(`id`) id: string): Promise<User> {
    return this.userService.deleteUser({ id: Number(id) });
  };

};
