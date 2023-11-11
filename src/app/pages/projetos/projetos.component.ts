import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { projectsData } from '../../mocks/projetos-data';
import { ProjetosService } from 'src/app/services/projetos.service';
import { habilidadesData, alternativasData } from 'src/app/mocks/projetos';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  projects = projectsData;
  habilidades = habilidadesData;
  alternativas = alternativasData;
  habilidadeSelecionada: string = 'TODAS';
  alternativaSelecionada: string = 'TODAS';
  projetosFiltrados = projectsData;

  constructor(
    public dialog: MatDialog,
    public projetosService: ProjetosService,
  ) { }

  displayInformation(event: any) {
    this.projetosService.selecionarProjeto(event);
  }

  capturarSelecao() {
    if (this.alternativaSelecionada !== 'TODAS') {
      this.projetosFiltrados = this.projects.filter((projeto) => projeto.modulo === this.alternativaSelecionada);
      return this.projetosFiltrados;
    } return this.projetosFiltrados = projectsData;
  }

  aplicarFiltros() {
    this.projetosFiltrados = this.projects.filter(projeto => {
      if (this.habilidadeSelecionada === 'Todas') {
        return true;
      } else {
        return projeto.stack.includes(this.habilidadeSelecionada);
      }
    });
  }
}