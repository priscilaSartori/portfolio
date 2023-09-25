import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { projectsData } from './projetos-data';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  projects = projectsData;

  constructor(
    public dialog: MatDialog,
    public projetosService: ProjetosService,
  ) { }

  displayInformation(event: any) {
    // console.log(event)
    this.projetosService.selecionarProjeto(event);
    // this.dialog.open(DetalhesProjetosComponent,event);
  }
}