export class Personnage {
    private _caracteristiques: Caracteristique[];
    private _jetSauvegardes: Jetsauvegarde[];
    private _competences: Competence[];

    constructor(caracteristiques: Caracteristique[], jetSauvegardes: Jetsauvegarde[], competences: Competence[]) {
        this._caracteristiques = caracteristiques;
        this._jetSauvegardes = jetSauvegardes;
        this._competences = competences;
    }
    public get caracteristiques() { return this._caracteristiques }
    public get jetSauvegardes() { return this._jetSauvegardes }
    public get competences() { return this._competences }
}

export class Caracteristique {
    private _nomCarac: string;
    private _valCarac: number;
    
    constructor( nomCarac: string, valCarac:number) {
        this._nomCarac = nomCarac;
        this._valCarac = valCarac;
    }
    public get nomCarac() { return this._nomCarac }
    public get valCarac() { return this._valCarac }
}

export class Jetsauvegarde {
    private _nomJS: string;
    private _valJS: number;
    private _chk: boolean;

    constructor( nomJS: string, valJS:number, chk: boolean) {
        this._nomJS = nomJS;
        this._valJS = valJS;
        this._chk = chk;
    }
    public get nomJS() { return this._nomJS }
    public get valJS() { return this._valJS }
    public get chkJS() { return this._chk }
}

export class Competence {
    private _nomComp: string;
    private _nomCarac: string;
    private _valComp: number;
    private _chk: boolean;

    constructor( nomComp: string, nomCarac: string, valComp:number, chk: boolean) {
        this._nomComp = nomComp;
        this._nomCarac = nomCarac;
        this._valComp = valComp;
        this._chk = chk;
    }
    public get nomComp() { return this._nomComp }
    public get nomCarac() { return this._nomCarac }
    public get valComp() { return this._valComp }
    public get chkComp() { return this._chk }
}

/*
    // Dans le composant Personnage, créer un tableau d'objets Caracteristique
  tableauDeCaracteristiques: iCaracteristique[] = [
    { nomCarac: 'Force', valCarac: 7 },
    { nomCarac: 'Dextérité', valCarac: 18 },
    { nomCarac: 'Constitution', valCarac: 12 },
    { nomCarac: 'Intelligence', valCarac: 17 },
    { nomCarac: 'Sagesse', valCarac: 19 },
    { nomCarac: 'Charisme', valCarac: 18 }
  ];
  // Dans le composant Personnage, créer un tableau d'objets Jet de Sauvegarde
  tableauDeJetSauvegarde: iJetSauvegarde[] = [
    { nomJS: 'Force', valJS: 4, chk: true },
    { nomJS: 'Dextérité', valJS: 3, chk: false },
    { nomJS: 'Constitution', valJS: 2, chk: false },
    { nomJS: 'Intelligence', valJS: 7, chk: true },
    { nomJS: 'Sagesse', valJS: 9, chk: false },
    { nomJS: 'Charisme', valJS: 8, chk: true }
  ];
  // Dans le composant Personnage, créer un tableau d'objets Compétences
  tableauDeCompetences: iCompetence[] = [
    { nomComp: 'Acrobaties', nomCarac: 'Dex', valComp: 4, chk: true },
    { nomComp: 'Dressage', nomCarac:'Sag', valComp: 2, chk: false },
    { nomComp: 'Arcanes', nomCarac: 'Int', valComp: 8, chk: true },
    { nomComp: 'Athlétisme', nomCarac: 'For', valComp: 5, chk: true },
    { nomComp: 'Tromperie', nomCarac: 'Cha', valComp: 6, chk: false },
    { nomComp: 'Histoire', nomCarac: 'Int', valComp: 4, chk: true },
    { nomComp: 'Intimidation', nomCarac: 'Cha', valComp: 1, chk: true },
    { nomComp: 'Intuition', nomCarac: 'Sag', valComp: 2, chk: false },
    { nomComp: 'Investigation', nomCarac: 'Int', valComp: 4, chk: false },
    { nomComp: 'Médecine', nomCarac: 'Sag', valComp: 3, chk: true },
    { nomComp: 'Nature', nomCarac: 'Int', valComp: 4, chk: true },
    { nomComp: 'Perception', nomCarac: 'Sag', valComp: 9, chk: false },
    { nomComp: 'Persuasion', nomCarac: 'Cha', valComp: 6, chk: true },
    { nomComp: 'Religion', nomCarac: 'Int', valComp: 4, chk: false },
    { nomComp: 'Représentation', nomCarac: 'Cha', valComp: 5, chk: true },
    { nomComp: 'Escamotage', nomCarac: 'Dex', valComp: 4, chk: false },
    { nomComp: 'Discrétion', nomCarac: 'Dex', valComp: 1, chk: false },
    { nomComp: 'Survie', nomCarac: 'Sag', valComp: 4, chk: false }
    ];  
    */