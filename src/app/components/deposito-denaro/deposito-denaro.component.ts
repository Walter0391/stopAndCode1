import { Component } from '@angular/core';
import { NuovoDenaroDto } from 'src/app/models/deposito-contatne';
import { DepositoService } from 'src/app/services/deposito.service';

@Component({
  selector: 'app-deposito-denaro',
  templateUrl: './deposito-denaro.component.html',
  styleUrls: ['./deposito-denaro.component.css'],
})
export class DepositoDenaroComponent {
  constructor(private ds: DepositoService) {}

  model: NuovoDenaroDto = new NuovoDenaroDto();

  aggiungiDenaro() {
    this.ds.nuovoDenaro(this.model).subscribe((dati) => (this.model = dati));
  }
}
