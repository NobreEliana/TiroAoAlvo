export class Fase {
    fase:any[];

    constructor(){
        this.fase = ["cenario1","cenario2"];
    }

    criarCenario(cenario){
        return this.fase[cenario];
        
    }
}

