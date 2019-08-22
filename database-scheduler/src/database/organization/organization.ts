import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {network} from "../network/network";


@Entity("organization",{schema:"public" } )
export class organization {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

   
    @OneToMany(type=>network, network=>network.org)
    networks:network[];
    
}
