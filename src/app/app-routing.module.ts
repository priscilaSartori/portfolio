import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { FormacaoComponent } from './pages/formacao/formacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: SobreComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'projects', component: ProjetosComponent},
  { path: 'experience', component: ExperienciaComponent},
  { path: 'education', component: FormacaoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
