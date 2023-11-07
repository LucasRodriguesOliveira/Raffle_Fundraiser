import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatListOption } from '@angular/material/list';
import { ITicket } from '../ticket/ticket.interface';
import { TicketService, tickets } from '../ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
})
export class TicketFormComponent {
  tickets: ITicket[] = [];

  ticketForm = this.fb.nonNullable.group({
    code: this.fb.nonNullable.control(0),
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly ticketService: TicketService,
    private readonly router: Router,
  ) {
    this.tickets = tickets;
  }


  remove(values: MatListOption[]) {
    values.forEach((option: MatListOption) => {
      this.ticketService.remove(parseInt(option.getLabel(), 10));
    });
  }

  clear() {
    this.ticketService.clear();
  }

  add() {
    this.ticketService.add(
      { code: this.ticketForm.controls.code.value },
    );
  }

  print() {
    this.router.navigate(['/ticket']);
  }
}
