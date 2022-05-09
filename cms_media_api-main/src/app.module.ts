import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { JwtModule } from '@nestjs/jwt';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import {
  Category,
  CategoryConfig,
  Item,
  Product,
  User,
  UserHobies,
  UserToken,
} from './entities';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { AssetsController } from './controllers/assets.controller';
import { AssetsService } from './services/assets.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.dev'],
    }),
    MikroOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        dbName: config.get('DB_NAME'),
        host: config.get('DB_HOST', 'localhost'),
        port: config.get('DB_PORT', 3306),
        user: config.get('DB_USER', 'root'),
        password: config.get('DB_PASSWORD', 'root'),
        highlighter: new SqlHighlighter(),
        debug: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    MikroOrmModule.forFeature([
      User,
      UserToken,
      UserHobies,
      Product,
      Category,
      CategoryConfig,
      Item,
    ]),
    JwtModule.register({
      secret: 'jwtConstants.secret',
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  controllers: [
    AppController,
    AuthController,
    CategoryController,
    AssetsController,
  ],
  providers: [AppService, AuthService, CategoryService, AssetsService],
})
export class AppModule {}
