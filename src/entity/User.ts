import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { CoreEntity } from "../shared/core.entities";

@Entity()
export class User extends CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
