import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {network} from "../network/network";


@Entity("network_type",{schema:"public" } )
export class network_type {

    @PrimaryGeneratedColumn({
        type:"smallint", 
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:true,
        name:"valuename"
        })
    valuename:string | null;
        

   
    @OneToMany(type=>network, network=>network.net_type)
    networks:network[];
}
