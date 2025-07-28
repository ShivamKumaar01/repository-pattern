import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUserModule } from './features/create-user/create-user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'ormconfig';


@Module({
  // imports: [CreateUserModule],
    imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => dataSourceOptions(configService),
      inject: [ConfigService],
    }),
    CreateUserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
