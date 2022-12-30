import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { cepRetorno } from 'src/app/models/cepRetorno';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.css']
})
export class Teste2Component implements OnInit {

  constructor( private CepService: CepService ) { }

  cep: string = '';
  cepRetornoExibir: cepRetorno = new cepRetorno;

  ngOnInit(): void {
  }

  consultarCEP(): void
  {
    if ( !this.cep )
    {
      alert('Campo de CEP não preenchido!');
    }
    else
    {
      this.CepService.buscaCep(this.cep).subscribe( retornoCEP => {
        this.cepRetornoExibir = retornoCEP;
      },
      (err) =>
      {
        alert('Cep não encontrado!');
      });
    }
  }

}
