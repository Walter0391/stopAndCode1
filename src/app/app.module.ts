import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstrattoContoComponent } from './components/estratto-conto/estratto-conto.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { DepositoDenaroComponent } from './components/deposito-denaro/deposito-denaro.component';
import { DepositoAssegniComponent } from './components/deposito-assegni/deposito-assegni.component';
import { PrelievoComponent } from './components/prelievo/prelievo.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    EstrattoContoComponent,
    DepositoComponent,
    DepositoDenaroComponent,
    DepositoAssegniComponent,
    PrelievoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
