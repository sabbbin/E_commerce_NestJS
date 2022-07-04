import { Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Product, ProductSchema } from 'src/Schema/product.schema'

import { ProductController } from './product.controller'
import { ProduceService } from './product.service'


@Module({
    imports:[MongooseModule.forFeature([{name:Product.name, schema:ProductSchema}])],
    controllers:[ProductController],
    providers:[ProduceService],
})


export class ProductModule{}