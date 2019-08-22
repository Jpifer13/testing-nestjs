import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {phone_groups} from "../phone_groups/phone_groups";
import {phone_dids} from "../phone_dids/phone_dids";


@Entity("phone_extensions",{schema:"public" } )
export class phone_extensions {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        name:"extension"
        })
    extension:string;
        

    @Column("character varying",{ 
        nullable:true,
        name:"password"
        })
    password:string | null;
        

   
    @ManyToOne(type=>phone_groups, phone_groups=>phone_groups.phoneExtensionss,{  })
    @JoinColumn({ name:'phone_group_id'})
    phoneGroup:phone_groups | null;


   
    @OneToMany(type=>phone_dids, phone_dids=>phone_dids.extension)
    phoneDidss:phone_dids[];
    
}
