import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from '../../types';
import { ProductDTO } from 'src/dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  // Constants
  MAX_PRODUCT_PER_PAGE = 8;

  // Get all products by page. Default is 1.
  async getProducts({ page, type }): Promise<Product[]> {
    const products = await this.productModel
      .find(type && { type })
      .limit(this.MAX_PRODUCT_PER_PAGE * page);

    const productWithOldPrice = products.filter(({ price }) => price.old);
    const productWithoutOldPrice = products.filter(({ price }) => !price.old);

    return [...productWithOldPrice, ...productWithoutOldPrice];
  }

  // Get a single Product
  async getProduct(productID: string): Promise<Product> {
    const product = await this.productModel.findById(productID);
    return product;
  }

  // Post a single product
  async createProduct(createProductDTO: ProductDTO): Promise<Product> {
    const newProduct = new this.productModel(createProductDTO);
    return newProduct.save();
  }
}
