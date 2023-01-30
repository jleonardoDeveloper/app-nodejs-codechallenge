import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class TransactionStatus{
    @PrimaryColumn()
    id: number;

    @Column({ type:'varchar'})
    description: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: Date;
}