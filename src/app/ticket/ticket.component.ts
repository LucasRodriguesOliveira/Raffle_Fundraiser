import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITicket } from './ticket.interface';
import { tickets } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit, OnDestroy {
  tickets: ITicket[] = [];
  title: string = 'Ação entre Amigos!';
  description: string = 'Comprando você ajuda e ainda concorre a um Patinete Elétrico Importway 24v ou R$ 1.000,00 no Pix!';
  details: string = 'O Sorteio vai acontecer no dia 16 de Dezembro de 2023.';
  wishLuck: string = 'Boa Sorte!';

  timeoutId: any;

  ngOnInit(): void {
    this.tickets = tickets;

    this.timeoutId = setTimeout(() => {
      window.print();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }
}
