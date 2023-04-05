import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './entities/product/product.module';
import { OrderModule } from './entities/order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mariialiashenko:dvKXr6zcr7pQT1tK@clustersigma.dwxitog.mongodb.net/?retryWrites=true&w=majority',
    ),
    ProductModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
