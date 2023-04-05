import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderScheme } from '../../schemas/order.scheme';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderScheme }]),
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
