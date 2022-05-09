import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mysql';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User, UserToken } from '../entities';
import { unauthorizedException } from '../utils';
import { UserRole } from '../enums';
import { CreateUserDto } from '../dto';
import { LoginUserDto } from '../dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: EntityRepository<User>,
    @InjectRepository(UserToken)
    private readonly userTokenRepo: EntityRepository<UserToken>,
    private jwtService: JwtService,
  ) {}

  async register(data: CreateUserDto): Promise<User> {
    const { password, ...rest } = data;
    const newUser = this.userRepo.create({
      ...rest,
      password: bcrypt.hashSync(password, 10),
      role: UserRole.NormalUser,
    });
    await this.userRepo.persistAndFlush(newUser);
    return newUser;
  }

  async login({ username, password }: LoginUserDto) {
    const user = await this.userRepo.findOne({ username });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw unauthorizedException();
    }

    const userToken = this.userTokenRepo.create({
      user,
      expiredIn: 1000,
    });
    await this.userTokenRepo.persistAndFlush(userToken);

    const payload = {
      id: user.id,
      username: user.username,
      role: user.role,
      uuid: userToken.uuid,
    };

    return {
      id: user.id,
      username: user.username,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
