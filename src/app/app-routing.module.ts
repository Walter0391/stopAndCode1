import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstrattoContoComponent } from './components/estratto-conto/estratto-conto.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { DepositoDenaroComponent } from './components/deposito-denaro/deposito-denaro.component';
import { DepositoAssegniComponent } from './components/deposito-assegni/deposito-assegni.component';
import { PrelievoComponent } from './components/prelievo/prelievo.component';

const routes: Routes = [
  {
    path: 'estratto-conto',
    component: EstrattoContoComponent,
  },
  {
    path: 'deposito',
    component: DepositoComponent,
    children: [
      {
        path: '',
        component: DepositoDenaroComponent,
      },
      { path: ':assegni', component: DepositoAssegniComponent },
    ],
  },
  {
    path: 'prelievo',
    component: PrelievoComponent,
  },
  {
    path: '',
    redirectTo: '/estratto-conto',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
