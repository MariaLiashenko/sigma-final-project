import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductScheme } from '../../schemas/product.scheme';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductScheme }]),
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
