import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { resolve } from 'path';
import { UserCreateDTO } from 'src/domain/dto/user-create.dto';
import { User } from 'src/domain/models/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }
  
  async create(user: User): Promise<UserCreateDTO> {
    return this.userRepository.save(user);
  }
  async findAll(): Promise<UserCreateDTO[]> {
    return this.userRepository.find();
  }
  async findOneById(id: number): Promise<UserCreateDTO> {
    return this.userRepository.findOne({
      where: {
        id: id
      }
    });
  }
  async findOneByUsername(username: String): Promise<UserCreateDTO> {
    return this.userRepository.findOne({ 
      where: {username: username}
     })
  }
  
  async updateOne(id: number, user: Partial<UserCreateDTO>) {
    return this.userRepository.update({ id }, user);
  }
  async deleteOne(id: number): Promise<any> {
    return (this.userRepository.delete(id));
  }
}