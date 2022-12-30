import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './views/teste/teste.component';
import { Teste2Component } from './views/teste2/teste2.component';

const routes: Routes = [
  { path: 'teste1', component: TesteComponent },
  { path: 'teste2', component: Teste2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
