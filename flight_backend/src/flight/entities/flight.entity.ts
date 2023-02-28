import { FlightCompany } from 'src/flight-company/entities/flight-company.entity';
import { Seat } from 'src/seat/entities/seat.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  country: string;
  @Column()
  city: string;
  @Column({ default: null })
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
  @ManyToOne(() => FlightCompany, (flightCompany) => flightCompany.flight) // specify inverse side as a second parameter
  @JoinColumn()
  company: FlightCompany;

  @OneToMany(() => Seat, (seat) => seat.flight) // specify inverse side as a second parameter
  @JoinColumn()
  seats: Seat;
  @ManyToMany(
    () => User,
    (user) => user.flight, //optional
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinTable({
    name: 'user_flight',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'flight_id',
      referencedColumnName: 'id',
    },
  })
  user?: User[];

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
