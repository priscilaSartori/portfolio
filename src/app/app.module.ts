import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MatDialogModule } from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './pages/skills/skills.component';

import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { SabiosComponent } from './components/experience/sabios/sabios.component';
import { EducationComponent } from './pages/education/education.component';
import { EconomiaComponent } from './components/education/economia/economia.component';
import { DesenvolvimentoWebFundamentosComponent } from './components/education/desenvolvimentoWeb/desenvolvimento-web-fundamentos/desenvolvimento-web-fundamentos.component';
import { DesenvolvimentoWebFrontEndComponent } from './components/education/desenvolvimentoWeb/desenvolvimento-web-front-end/desenvolvimento-web-front-end.component';
import { DesenvolvimentoWebBackendComponent } from './components/education/desenvolvimentoWeb/desenvolvimento-web-backend/desenvolvimento-web-backend.component';
import { DesenvolvimentoWebCienciaDadosComponent } from './components/education/desenvolvimentoWeb/desenvolvimento-web-ciencia-dados/desenvolvimento-web-ciencia-dados.component';
import { DataAnalyticsComponent } from './components/education/dataAnalytics/data-analytics/data-analytics.component';
import { DataAnalyticsFundamentosComponent } from './components/education/dataAnalytics/data-analytics-fundamentos/data-analytics-fundamentos.component';
import { DataAnalyticsPerguntasComponent } from './components/education/dataAnalytics/data-analytics-perguntas/data-analytics-perguntas.component';
import { DataAnalyticsPrepararDadosComponent } from './components/education/dataAnalytics/data-analytics-preparar-dados/data-analytics-preparar-dados.component';
import { DataAnalyticsProcessarDadosComponent } from './components/education/dataAnalytics/data-analytics-processar-dados/data-analytics-processar-dados.component';
import { DataAnalyticsAnalisarDadosComponent } from './components/education/dataAnalytics/data-analytics-analisar-dados/data-analytics-analisar-dados.component';
import { DataAnalyticsCompartilharDadosComponent } from './components/education/dataAnalytics/data-analytics-compartilhar-dados/data-analytics-compartilhar-dados.component';
import { DataAnalyticsAnalisarDadosRComponent } from './components/education/dataAnalytics/data-analytics-analisar-dados-r/data-analytics-analisar-dados-r.component';
import { DesenvolvimentoWebComponent } from './components/education/desenvolvimentoWeb/desenvolvimento-web/desenvolvimento-web.component';
import { TodoListComponent } from './components/projects/todo-list/todo-list.component';
import { PixelArtComponent } from './components/projects/pixel-art/pixel-art.component';
import { TelaLoginComponent } from './components/projects/tela-login/tela-login.component';
import { TrybewartsComponent } from './components/projects/trybewarts/trybewarts.component';
import { ShoppingcartComponent } from './components/projects/shoppingcart/shoppingcart.component';
import { TryunfoComponent } from './components/projects/tryunfo/tryunfo.component';
import { TrybetunesComponent } from './components/projects/trybetunes/trybetunes.component';
import { OnlineStoreComponent } from './components/projects/online-store/online-store.component';
import { TrybeWalletComponent } from './components/projects/trybe-wallet/trybe-wallet.component';
import { TriviaComponent } from './components/projects/trivia/trivia.component';
import { StarwarsComponent } from './components/projects/starwars/starwars.component';
import { MysqlOneForAllComponent } from './components/projects/mysql-one-for-all/mysql-one-for-all.component';
import { TalkerManagerComponent } from './components/projects/talker-manager/talker-manager.component';
import { StoreManagerComponent } from './components/projects/store-manager/store-manager.component';
import { BlogsApiComponent } from './components/projects/blogs-api/blogs-api.component';
import { MysqlAllForOneComponent } from './components/projects/mysql-all-for-one/mysql-all-for-one.component';
import { DockerTodoListComponent } from './components/projects/docker-todo-list/docker-todo-list.component';
import { TrybetsComponent } from './components/projects/trybets/trybets.component';
import { TrybeHotelComponent } from './components/projects/trybe-hotel/trybe-hotel.component';
import { TrybeGamesComponent } from './components/projects/trybe-games/trybe-games.component';
import { TrybeBankComponent } from './components/projects/trybe-bank/trybe-bank.component';
import { ApiRecipesComponent } from './components/projects/api-recipes/api-recipes.component';
import { AluguelCarrosComponent } from './components/projects/aluguel-carros/aluguel-carros.component';
import { TFCComponent } from './components/projects/tfc/tfc.component';
import { RestaurantOrdersComponent } from './components/projects/restaurant-orders/restaurant-orders.component';
import { TingComponent } from './components/projects/ting/ting.component';
import { DeliveryAppComponent } from './components/projects/delivery-app/delivery-app.component';
import { RecipesAppComponent } from './components/projects/recipes-app/recipes-app.component';
import { MomentsComponent } from './components/projects/moments/moments.component';
import { DashboardComponent } from './components/projects/dashboard/dashboard.component';
import { AlgorithmsComponent } from './components/projects/algorithms/algorithms.component';
import { CarShopComponent } from './components/projects/car-shop/car-shop.component';
import { MongoDBComponent } from './components/projects/mongo-db/mongo-db.component';
import { TrybersAndDragonsComponent } from './components/projects/trybers-and-dragons/trybers-and-dragons.component';
import { TrybeSmithComponent } from './components/projects/trybe-smith/trybe-smith.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ExperienciaComponent,
    ProjetosComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    SabiosComponent,
    EducationComponent,
    EconomiaComponent,
    DesenvolvimentoWebFrontEndComponent,
    DesenvolvimentoWebFundamentosComponent,
    DesenvolvimentoWebBackendComponent,
    DesenvolvimentoWebCienciaDadosComponent,
    DataAnalyticsComponent,
    DataAnalyticsFundamentosComponent,
    DataAnalyticsPerguntasComponent,
    DataAnalyticsPrepararDadosComponent,
    DataAnalyticsProcessarDadosComponent,
    DataAnalyticsAnalisarDadosComponent,
    DataAnalyticsCompartilharDadosComponent,
    DataAnalyticsAnalisarDadosRComponent,
    DesenvolvimentoWebComponent,
    TodoListComponent,
    PixelArtComponent,
    TelaLoginComponent,
    TrybewartsComponent,
    ShoppingcartComponent,
    TryunfoComponent,
    TrybetunesComponent,
    OnlineStoreComponent,
    TrybeWalletComponent,
    TriviaComponent,
    StarwarsComponent,
    MysqlOneForAllComponent,
    TalkerManagerComponent,
    StoreManagerComponent,
    BlogsApiComponent,
    MysqlAllForOneComponent,
    DockerTodoListComponent,
    TrybetsComponent,
    TrybeHotelComponent,
    TrybeGamesComponent,
    TrybeBankComponent,
    ApiRecipesComponent,
    AluguelCarrosComponent,
    TFCComponent,
    RestaurantOrdersComponent,
    TingComponent,
    DeliveryAppComponent,
    RecipesAppComponent,
    MomentsComponent,
    DashboardComponent,
    AlgorithmsComponent,
    CarShopComponent,
    MongoDBComponent,
    TrybersAndDragonsComponent,
    TrybeSmithComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    NgxPageScrollModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
