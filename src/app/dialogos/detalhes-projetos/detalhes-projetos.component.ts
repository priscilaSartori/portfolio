import { Component } from '@angular/core';
import { projectsData } from './../../pages/projetos/projetos-data';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-detalhes-projetos',
  templateUrl: './detalhes-projetos.component.html',
  styleUrls: ['./detalhes-projetos.component.css']
})
export class DetalhesProjetosComponent {
  projects = projectsData;
  projectId = this.projetosService.projetoId;
  
  constructor(
    public change: MatDialogRef<DetalhesProjetosComponent>,
    public projetosService: ProjetosService,
  ) { }
  
  ngOnInit() {
    this.projectId = this.projetosService.projetoId;
  }

  toggleChangePassword() {
    this.change.close();
  }
}
