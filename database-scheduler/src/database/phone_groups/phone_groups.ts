import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {phone_extensions} from "../phone_extensions/phone_extensions";


@Entity("phone_groups",{schema:"public" } )
export class phone_groups {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

   
    @OneToMany(type=>phone_extensions, phone_extensions=>phone_extensions.phoneGroup)
    phoneExtensionss:phone_extensions[];
    
}
