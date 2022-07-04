import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule} from './product/product.modules'

//Mongod connection
import  {MongooseModule} from '@nestjs/mongoose'
import { AuthModule } from './Auth/auth.modules';

@Module({
  imports: [ProductModule,
    AuthModule,
   MongooseModule.forRoot('mongodb://localhost/nest',{
   }),
  //  MongooseModule.forRoot('mongodb://localhost/product',{
  //   connectionName:'products'
  //  })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
