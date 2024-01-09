import { Publisher, Subjects, TicketUpdatedEvent } from '@hireinhours/auth-middleware';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
