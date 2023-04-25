import { Entity, Column, PrimaryColumn, DeleteDateColumn } from "typeorm"

@Entity()
export class SerenataEntity {
    @Column({unique: true})
    @PrimaryColumn()
    id: string

    @Column()
    date: string

    @Column()
    hour: string

    @Column()
    municipality: string
 
    @Column()
    name: string 
 
    @Column()
    place: string

    @DeleteDateColumn()
    deletedAt?: Date
}