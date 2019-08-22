import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {network} from "../network/network";
import {tagged} from "../tagged/tagged";


@Entity("tag",{schema:"public" } )
export class tag {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:true,
        name:"valuename"
        })
    valuename:string | null;
        

   
    @ManyToMany(type=>network, network=>network.tags)
    networks:network[];

    @OneToMany(type => tagged, tagged => tagged.tag)
    tags: tagged[];
    
}
