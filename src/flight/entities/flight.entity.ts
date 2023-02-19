import { Seat } from 'src/seat/entities/seat.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  country: string;
  @Column()
  city: string;
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
  @OneToMany(() => Seat, (seat) => seat.flight) // specify inverse side as a second parameter
  @JoinColumn()
  seats: Seat;
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
