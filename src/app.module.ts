import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ROOT',
      database: 'enval',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Ajoutez ici les entités de TypeORM
      synchronize: true, // Active la synchronisation automatique du schéma (attention en production)
  }),
    TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
//   constructor(){
//     this.handleDatabaseConnection();
//   }
//   private handleDatabaseConnection() {
//     const connection = TypeOrmModule.forRoot(); // Obtenez la connexion TypeORM

//     connection
//     .then(() => console.log('La base de données a été connectée avec succès'))
//     .catch(error => console.error('Erreur lors de la connexion à la base de données :', error));
// }
}
