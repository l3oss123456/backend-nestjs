import { Controller, Get, Param, Query } from '@nestjs/common';
import * as R from 'ramda';
import { ProductDTO, ProductQueryDTO } from 'src/utils/dto/product.dto';
import { SortDTO, PaginationDTO } from '../utils/dto/global.dto';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(`product`)
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  // @Get()
  // getProductAll(@Query(`name`) productName?: string): ProductDTO[] {
  //   if (productName) {
  //     return this.productService.findByCondition((product) => {
  //       return product.name.includes(productName);
  //     });
  //   }

  //   return this.productService.findAll();
  // }

  @Get()
  getProductAll(
    @Query() productQuery: ProductQueryDTO,
    @Query() sort: SortDTO,
    @Query() pagination: PaginationDTO,
  ): ProductDTO[] {
    const { name: productName } = productQuery;

    if (!R.isNil(productName)) {
      return this.productService.findByCondition((product) => {
        return product.name.includes(productName);
      });
    }

    return this.productService.findAll();
  }

  @Get(`:id`)
  getProductById(@Param(`id`) id: string) {
    return this.productService.findById(Number(id));
  }
}
