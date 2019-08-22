import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("barcodes",{schema:"public" } )
export class barcodes {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        name:"barcode"
        })
    barcode:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        name:"stencil"
        })
    stencil:string;
        
}
