import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ProduceService } from "./product.service";


@Controller('product')
export class ProductController{
    constructor( private readonly productService: ProduceService ){}

        @Get()
        getProduct(){
            return this.productService.getAllProduct()
        }

        @Post ()
        postProduct(
          @Body() productData


        ){
            
            return this.productService.postProduct(productData)
        }

        @Get(':id')
        getSingleProduct(
   
        ){
            console.log('helo from getSingleProduc')
            
            return this.productService.getSingleProduct()
        }
   
        @Put(':id')
        updateSingleProduct(
          
        ){
            return  this.productService.updateSingleProduct()
        }

} 