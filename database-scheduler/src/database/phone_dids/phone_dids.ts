import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {phone_extensions} from "../phone_extensions/phone_extensions";


@Entity("phone_dids",{schema:"public" } )
export class phone_dids {

    @Column("int4",{ 
        nullable:false,
        primary:true,
        array:true,
        name:"did"
        })
    did:number[];
        

   
    @ManyToOne(type=>phone_extensions, phone_extensions=>phone_extensions.phoneDidss,{  })
    @JoinColumn({ name:'extension'})
    extension:phone_extensions | null;

}
