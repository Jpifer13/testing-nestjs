import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {organization} from "../organization/organization";
import {network_type} from "../network_type/network_type";
import {tag} from "../tag/tag";
import {tagged} from "../tagged/tagged";


@Entity("network",{schema:"public" } )
export class network {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:string;
        

   
    @ManyToOne(type=>organization, organization=>organization.networks,{  nullable:false, })
    @JoinColumn({ name:'org_id'})
    org:organization | null;


   
    @ManyToOne(type=>network_type, network_type=>network_type.networks,{  nullable:false, })
    @JoinColumn({ name:'type_id'})
    net_type:network_type | null;


    @Column("character varying",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("character varying",{ 
        nullable:true,
        name:"timezone"
        })
    timezone:string | null;
        

   
    @ManyToMany(type=>tag, tag=>tag.networks,{  nullable:false, })
    @JoinTable({ name:'tagged'})
    tags:tag[];

    @OneToOne(type => tagged)
    @JoinColumn()
    tag: tagged;
    
}
