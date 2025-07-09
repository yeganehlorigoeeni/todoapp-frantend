export class TodoForSaveModel{
    title:string;
    describtion:string;
    date:Date;
    constructor(title:string='',describtion:string='',date:Date=new Date()){
        this.title=title;
        this.describtion=describtion;
        this.date=date;
    }
}

    export class TodoForListModel{
        id:number;
        title:string;
        description:string;
        date:Date;
        constructor(id:number=0,title:string='',description:string='',date:Date=new Date()){
            this.id=id ;
            this.title=title;
            this.description=description;
            this.date=date;
        }
    }
