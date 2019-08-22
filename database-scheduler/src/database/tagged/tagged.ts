import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {network} from "../network/network";
import {tag} from "../tag/tag";

@Entity("tagged",{schema:"public" } )
export class tagged {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        name:"net_id"
        })
    net_id:string;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"tag_id"
        })
    tag_id:number;

    @OneToOne(type => network)
    @JoinColumn()
    net: network;

    @ManyToOne(type => tag, tag => tag.tags)
    tag: tag;
        
}
