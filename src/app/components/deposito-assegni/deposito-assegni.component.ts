import { Component } from '@angular/core';
import { NuovoDenaroDto } from 'src/app/models/deposito-contatne';
import { DepositoService } from 'src/app/services/deposito.service';

@Component({
  selector: 'app-deposito-assegni',
  templateUrl: './deposito-assegni.component.html',
  styleUrls: ['./deposito-assegni.component.css'],
})
export class DepositoAssegniComponent {
  constructor(private ds: DepositoService) {}

  model: NuovoDenaroDto = new NuovoDenaroDto();

  aggiungiAssegni() {
    this.ds.nuovoDenaro(this.model).subscribe((dati) => (this.model = dati));
  }
}
