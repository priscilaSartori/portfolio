import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { projectsData } from '../../mocks/projetos-data';
import { ProjetosService } from 'src/app/services/projetos.service';
import { habilidadesData, alternativasData } from 'src/app/mocks/projetos';
import { icones } from 'src/app/mocks/stacks';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  projects = projectsData;
  habilidades = habilidadesData;
  alternativas = alternativasData;
  habilidadeSelecionada: string = 'TODOS';
  alternativaSelecionada: string = 'TODOS';
  projetosFiltrados = projectsData;

  constructor(
    public dialog: MatDialog,
    public projetosService: ProjetosService,
  ) { }

  displayInformation(event: any) {
    this.projetosService.selecionarProjeto(event);
  }

  filtrarModulo() {
    if (this.alternativaSelecionada !== 'TODOS') {
      this.projetosFiltrados = this.projects.filter((projeto) => projeto.modulo === this.alternativaSelecionada);
      return this.projetosFiltrados;
    } return this.projetosFiltrados = projectsData;
  }

  filtrarStack() {
    if (this.habilidadeSelecionada !== 'TODOS') {
      this.projetosFiltrados = this.projects.filter((projeto) => projeto.stack.includes(this.habilidadeSelecionada));
      console.log(typeof this.habilidadeSelecionada, this.projetosFiltrados)
      return this.projetosFiltrados;
    } return this.projetosFiltrados = projectsData;
  }
    // this.projetosFiltrados = this.projects.filter(projeto => {
    //   if (this.habilidadeSelecionada === 'TODOS') {
    //     return true;
    //   } else {
    //     return projeto.stack.includes(this.habilidadeSelecionada);
    //   }
    // });
  // }
 
  obterNomeIcone(icone: string): string {
    for (const [key, value] of Object.entries(icones)) {
      if (value === icone) {
        return key;
      }
    }
  
    return 'Nome Desconhecido';
  }
}