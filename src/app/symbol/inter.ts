export interface ISentimentQuote{
    description:string,
    displaySymbol?:string,
    symbol:string,
    type?:string,
    c:number,
    d:number,
    dp?:number,
    h:number,
    l?:number,
    o:number,
    pc?:number,
    year?:number,
    month?:number,
    change?:number,
    mspr?:number;
}

export interface IState{
    name:string;
}

export interface ISymbol{
    count:number;
    result:IResult[]
}

export interface IResult{
    description:string,
    displaySymbol:string,
    symbol:string,
    type:string,
    year:number,
}
export interface ISentimentData{
    change:string,
    month:string,
    mspr:string
}