export class Fase {
    fase:any[];

    constructor(){
        this.fase = ["fase1-casa","fase2-lago"];
    }

    criarCenario(cenario){
        return this.fase[cenario];
        
    }
}

