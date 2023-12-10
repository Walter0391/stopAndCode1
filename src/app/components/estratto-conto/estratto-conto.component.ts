import { Component, OnInit } from '@angular/core';
import { Denaro, NuovoDenaroDto } from 'src/app/models/deposito-contatne';
import { DepositoService } from 'src/app/services/deposito.service';

@Component({
  selector: 'app-estratto-conto',
  templateUrl: './estratto-conto.component.html',
  styleUrls: ['./estratto-conto.component.css'],
})
export class EstrattoContoComponent implements OnInit {
  money: Denaro[] = [];
  model: NuovoDenaroDto = new NuovoDenaroDto();
  constructor(private ds: DepositoService) {}

  ngOnInit(): void {
    this.ds.getArticoli().subscribe((dati) => (this.money = dati));
  }
}
