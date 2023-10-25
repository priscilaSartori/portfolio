import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';

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
import { DetalhesProjetosComponent } from './dialogos/detalhes-projetos/detalhes-projetos.component';
import { DesenvolvimentoWebCSharpComponent } from './components/education/desenvolvimentoWeb/desenvolvimento-web-csharp/desenvolvimento-web-csharp.component';

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
    DetalhesProjetosComponent,
    DesenvolvimentoWebCSharpComponent,
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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
