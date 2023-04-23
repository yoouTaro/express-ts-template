import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from "typeorm";

export abstract class CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @VersionColumn({ default: 0 })
  version: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ type: "timestamp" })
  deletedAt!: Date;
}
