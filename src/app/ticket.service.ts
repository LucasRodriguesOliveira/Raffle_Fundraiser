import { Injectable } from '@angular/core';
import { ITicket } from './ticket/ticket.interface';

export const tickets: ITicket[] = [];

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  add(ticket: ITicket) {
    tickets.push(ticket);
  }

  remove(code: number) {
    const index = tickets.findIndex(
      (ticket: ITicket) => ticket.code === code,
    );

    tickets.splice(index, 1);
  }

  clear() {
    tickets.splice(0, tickets.length);
  }
}
