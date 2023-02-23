import { Flight } from 'src/flight/entities/flight.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  airlines: string;
  @Column()
  flight_number: string;
  @Column()
  departure_airport: string;
  @Column()
  arrival_airport: string;
  @Column()
  departure_time: string;
  @Column()
  arrival_time: string;
  @Column()
  duration: string;
  @Column()
  weight: string;
  @Column()
  total_seat_number: string;
  @Column()
  available_seats: string;
  @Column()
  suppliers: string;
  @Column()
  seat_price: string;
  @ManyToOne(() => Flight, (flight) => flight.seats) // specify inverse side as a second parameter
  flight: Flight;

  @ManyToMany((type) => Seat)
  @JoinTable()
  seats: Seat[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}
