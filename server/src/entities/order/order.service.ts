import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { OrderDTO } from 'src/dto/order.dto';
import { Order } from '../../types';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}

  // Post a single order
  async createOrder(createOrderDTO: OrderDTO): Promise<Order> {
    const newOrder = new this.orderModel(createOrderDTO);
    return newOrder.save();
  }
}
