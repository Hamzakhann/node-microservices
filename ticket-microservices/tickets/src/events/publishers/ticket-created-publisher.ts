import { Publisher, Subjects, TicketCreatedEvent } from '@hireinhours/auth-middleware';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
