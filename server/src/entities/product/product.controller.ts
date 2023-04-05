import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  // Add Product: /product/create
  @Post('/create')
  async createProduct(@Res() res, @Body() createProductDTO: ProductDTO) {
    const product = await this.productService.createProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Product Successfully Created',
      product,
    });
  }

  // Get Products /product
  // Get product by type /product?type=type&page=1
  @Get('/')
  async getProducts(@Res() res, @Query('type') type, @Query('page') page = 1) {
    const query = {
      type,
      page,
    };

    const products = await this.productService.getProducts(query);
    return res.status(HttpStatus.OK).json(products);
  }

  // GET single product: /product/5c9d46100e2e5c44c444b2d1
  @Get('/:productID')
  async getProduct(@Res() res, @Param('productID') productID) {
    const product = await this.productService.getProduct(productID);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json(product);
  }
}
