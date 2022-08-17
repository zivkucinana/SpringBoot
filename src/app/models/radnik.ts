import { Obrazovanje } from "./obrazovanje";
import { Sektor } from "./sektor";

export class Radnik {
    id!:number;
    brojLk!:number;
    ime!:string;
    prezime!:string;
    obrazovanje!:Obrazovanje;
    sektor!:Sektor;
}