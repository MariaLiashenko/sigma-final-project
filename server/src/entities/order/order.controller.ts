import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { OrderDTO } from 'src/dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  // Add Product: /order/create
  @Post('/create')
  async createOrder(@Res() res, @Body() createOrderDTO: OrderDTO) {
    const order = await this.orderService.createOrder(createOrderDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Order Successfully Created',
      order,
    });
  }
}
