import {Stock, StockItem, StockInfo, Service, Suggestion, Invoice, Stamp, Card} from './inventory.model';





export class Priscription {
  constructor(
    public intake = null,
    public freq: string= null,
    public piriod: number = null,
    public extend: string = null
  ) {}
}

export class Bed {
  constructor(
    public _id?: string,
    public bedNumber: number = null,
    public status: boolean = false
    ) {}
}
export class Medication {
  constructor(
     public product = new StockItem(),
     public priscription: Priscription = new Priscription(),
     public paused: boolean = false,
     public pausedOn: Date = null,
     public lastTaken: Date = null,
     public stamp: Stamp = new Stamp(),
     public _id?: string
     ) {}
}
export class Complain {
  constructor(
    public complain: string = null,
    public duration: number = null,
    public stamp: Stamp = new Stamp()
     ) {}
  }
export class History {
  constructor(
    public condition: string = null,
    public duration: number = null,
    public bearer: string = 'Self',
    public stamp: Stamp = new Stamp()
     ) {}
  }
export class Note {
  constructor(
    public _id?: string,
    public type?: string,
    public note: string = null,
    public stamp: Stamp = new Stamp()
     ) {}
  }

export class Bp {
  constructor(
    public systolic: number = null,
    public diastolic: number = null,
    public stamp: Stamp = new Stamp()
    ) {}
}
export class Resp {
  constructor(
    public value: number = null,
    public stamp: Stamp = new Stamp()
    ) {}
}
export class Pulse {
  constructor(
    public value: number = null,
    public stamp: Stamp = new Stamp()
    ) {}
}
export class Temp {
  constructor(
    public value: number = null,
    public stamp: Stamp = new Stamp()
    ) {}
}
export class Bg {
  constructor(
    public value: string = null,
    public stamp: Stamp = new Stamp()
    ) {}
}
export class Height {
  constructor(
    public value: number = null,
    public stamp: Stamp = new Stamp()
    ) {}
}
export class Weight {
  constructor(
    public value: number = null,
    public stamp: Stamp = new Stamp()
   ) {}
}
export class Vaccin {
  constructor(
    public name: string = null,
    public stamp: Stamp = new Stamp()
   ) {}
}
export class Immunization {
  constructor(
    public vaccins: Vaccin[][] = [[]],
    public questionaire: any = null
   ) {}
}

export class VitalStocks {
  constructor(
    public bp: Bp= new Bp(),
    public resp: Resp = new Resp(),
    public pulse: Pulse = new Pulse(),
    public bloodGl: Bg = new Bg(),
    public tempreture: Temp = new Temp(),
    public height: Height = new Height(),
    public weight: Weight = new Weight()
  ) {}
}
export class Vital {
  constructor(
    public bp: Bp[] = [],
    public resp: Resp [] = [],
    public pulse: Pulse [] = [],
    public bloodGl: Bg [] = [],
    public tempreture: Temp [] = [],
    public height: Height [] = [],
    public weight: Weight [] = []
  ) {}
}
export class Condition {
  constructor(
    public condition: string = null,
    public stamp: Stamp = new Stamp()
     ) {}
  }
export class Allegy {
  constructor(
    public allegy: string = null,
    public stamp: Stamp = new Stamp()
     ) {}
  }
export class Device {
  constructor(
    public device: string = null,
    public stamp: Stamp = new Stamp()
     ) {}
  }
export class Visit {
  constructor(
    public hospital?: any,
    public dept: string = 'GOPD',
    public status: string = null,
    public visitedOn: Date = new Date(),
    public addmittedOn: Date = null,
    public dischargedOn: Date = null,
    public diedOn: Date = null,
    public wardNo: number = null,
    public bedNo:  number = null
     ) {}
  }
  export class Report {
    constructor(
      public comment: string = null,
      public stamp: Stamp = new Stamp(),
      public attachments: string[] = [],
    ) {}
  }
export class Test {
  constructor(
    public name: string = null,
    public dept: string = null,
    public stamp: Stamp = new Stamp(),
    public treated: boolean = false,
    public report: Report = new Report()
     ) {}
  }
  export class Scan {
    constructor(
      public name: string = null,
      public dept: string = null,
      public stamp: Stamp = new Stamp(),
      public report: Report = new Report()
    ) {}
}
export class Surgery {
  constructor(
    public name: string = null,
    public dept: string = null,
    public stamp: Stamp = new Stamp(),
    public report: Report = new Report()
     ) {}
  }


export class Vitals {
  constructor(
    public bp: Bp = new Bp(),
    public resp: Resp = new Resp(),
    public pulse: Pulse = new Pulse(),
    public bloodGl: Bg = new Bg(),
    public tempreture: Temp = new  Temp(),
    public height: Height = new Height(),
    public weight: Weight = new Weight()
  ) {}
}
  export class DeathNote {
  constructor(public diagnosis: string = null,
  public cause: string = null,
  public owings: number = 0,
  public isPostM: boolean = false,
  public releasable: boolean = false,
  public releasedTo: string = null,
  public relationship: string = null,
  public diedOn: Date = new Date(),
  public comfirmedBy: any = null) {}

}
export class Appointment {
  constructor(
    public title: string = null,
    public setOn: Date = new Date(),
    public time: string = null,
    public date: string = null,
    public attended: boolean = false,
    public stamp: Stamp = new Stamp()
 ) {}

}
export class Session {
  constructor(
    public history: History = new History(),
    public note: Note = new Note(),
    public appointment: Appointment = new Appointment(),
    public complain: Complain = new Complain(),
    public condition: Condition = new Condition(),
    public medication: Medication = new Medication(),
    public surgery: Surgery = new Surgery(),
    public scan: Scan = new Scan(),
    public test: Test = new Test(),
    public vitals: VitalStocks = new VitalStocks(),
    public allegies: Allegy = new Allegy(),
    public devices: Device = new Device(),
    public visits: Visit = new Visit(),
    public service: Service = new Service(),
    public stock: Stock = new Stock(),
    public newServices: Service[] = [],
    public conditions: Condition[] = [],
    public complains: Complain[] = [],
    public histories: History[] = [],
    public items: Stock[] = [],
    public medications: Medication[] = [],
    public tests: Test[] = [],
    public desc: string[] = [],
    public surgeries: Surgery[] = [],
    public scans: Scan[] = [],
    public invoices: Invoice[] = [],
    public bills: string[] = [],
    public medInvoices: Invoice[] = [],
    public deathNote: DeathNote = new DeathNote()

     ) {}
  }
export class Record {
    constructor(
      public complains: any[] = [],
      public histories: any[] = [],
      public notes: Note[] = [],
      public vitals: Vital = new Vital(),
      public conditions: any[] = [],
      public allegies: Allegy[] = [],
      public devices: Device[] = [],
      public visits: any[] = [],
      public invoices: Invoice[][] = new Array<Invoice[]>(),
      public cards: Card[] = [],
      public appointments: Appointment[] = [],
      public medications: any[] = [],
      public tests: any[] = [],
      public scans: any = [],
      public surgeries: any[] = [],
      public immunization: Immunization = new Immunization(),
      public deathNote: DeathNote = new DeathNote()
       ) {}
    }
