import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class SerenataEntity {
    @Column({unique: true})
    id: number

    @Column()
    @PrimaryColumn()
    date: string

    @Column()
    hour: string

    @Column()
    municipality: string
 
    @Column()
    name: string
 
    @Column()
    place: string
}