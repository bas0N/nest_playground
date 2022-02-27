import { Controller,Get,Post,Put,Delete,Body,Req,Res,Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request,Response } from 'express';
import { ItemsService } from './items.service';
import {Item} from './interfaces/item.interface'
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService){

    }


    @Get()
    findAll():Promise<Item[]>{
        return  this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param):Promise<Item>{
        return  this.itemsService.findOne(param.id);

    }

    @Post()
    create(@Body()CreateItemDto:CreateItemDto):Promise<Item>{
        return this.itemsService.create(CreateItemDto)
    }
    @Delete(':id')
    delete(@Param() param):Promise<Item>{
        return this.itemsService.delete(param.id)

    }
    @Put(':id')
    put(@Body()updateItemDto:CreateItemDto,@Param() param):Promise<Item>{
        return this.itemsService.update(param.id,updateItemDto)
    }
   /* @Get()
    findAll(@Req() req:Request, @Res() res:Response):Response{
        console.log(req.url);
        return res.send('Hello World ')
    }

     @Get()
    findAll():string{
        return 'Hello world'
    }
    */
}
