import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EditResolver } from './resolver/edit.resolver';
import { EditService } from './service/edit.service';
import { Edit, EditSchema } from './entity/edit.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Edit.name, schema: EditSchema }]),
  ],
  providers: [EditService, EditResolver],
  exports: [EditService],
})
export class EditModule {}
