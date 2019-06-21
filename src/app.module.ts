import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TarifModule } from './tarif/tarif.module';
import { PortiqueModule } from './portique/portique.module';
import { OffreModule } from './offre/offre.module';
import { LogModule } from './log/log.module';
import { PromotionModule } from './promotion/promotion.module';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';
import { HttpStrategy} from './auth/http.strategy'

@Module({
  imports: [UserModule, TarifModule, PortiqueModule, OffreModule, LogModule, PromotionModule, RoleModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, HttpStrategy ],
})
export class AppModule {}
