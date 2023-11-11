import { Injectable } from '@angular/core';
import { DetalhesProjetosComponent } from '../dialogos/detalhes-projetos/detalhes-projetos.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  projetoId: number = 0;

  constructor(public dialog: MatDialog) {
  }

  selecionarProjeto(evento: number) {
    this.projetoId = evento;
    this.dialog.open(DetalhesProjetosComponent);
  }
}
