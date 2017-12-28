interface IFilter {
    search: string;
    page: number;
    rowsPerPage: number;
    orderBy: IOrder[];
}

interface IOrder{
    field:string;
    direction:number;
}