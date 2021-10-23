import { Module } from '@nestjs/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [FontAwesomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
