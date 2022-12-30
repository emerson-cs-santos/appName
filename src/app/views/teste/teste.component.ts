import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  constructor() { }

  teste: string = 'teste de teste testado';
  exibir: boolean = false;

  lista: Array<string> = [];

  valorTestar: string = 'teste';

  ngOnInit(): void {
    for (let index = 0; index < 5; index++)
    {
      this.lista[index] = `teste ${index}`;
    }
  }

  exibirTestes( mudarExibicao: boolean ): void
  {
    this.exibir = mudarExibicao;
  }
}
