import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/CreateUserDto.dtos';
import { IResponse } from 'src/utils/interFaces';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    const result = await this.usersService.getMany({
        // where: { active: true, status: Not(UserStatus.Pendiente) }
    });
    return result
  }

  @Get(":id")
  async getOne(@Param('id') id: string) {
    return await this.usersService.getUserById(id)
  } 

  @Get(":id/associate")
  async getAssociate(@Param('id') id: string) {
    return await this.usersService.getSerenatasAssociate(id)
  } 

  @Post()
  async create(@Body() payload: CreateUserDto) {
    return await this.usersService.create(payload)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.usersService.update(id, payload)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const userId = id;
    const result = await this.usersService.remove(userId)
    const response: IResponse = {
      data: result,
      error: null,
      message: "User deleted"
    }
    return response
  }

}
