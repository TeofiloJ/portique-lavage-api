import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Log } from './interfaces/log.interface';
import { CreateLogDto } from './dto/create-log.dto';
import { LOG_MODEL_PROVIDER } from '../constants';
import { Service } from '../service'

@Injectable()
export class LogService extends Service<Model<Log>, CreateLogDto, Log> {
    constructor(
        @Inject(LOG_MODEL_PROVIDER) private readonly logModel: Model<Log>) {
            super(logModel);
        }

    
}