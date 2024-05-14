import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class CreatureEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    lastSee: string;

    @Column({ default: 1 })
    countLastSee: number;

    @Column({ default: false })
    extinct: boolean;

    @CreateDateColumn({default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}