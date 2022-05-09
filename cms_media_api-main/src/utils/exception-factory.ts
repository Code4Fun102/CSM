import { UnauthorizedException } from '@nestjs/common';

export const unauthorizedException = () =>
  new UnauthorizedException('Tên đăng nhập hoặc mật khẩu không chính xác!');
