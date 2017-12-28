export class DataTableColumn {
    header: string;
    dataField: string;
    outputType?:EOutputColumnType = EOutputColumnType.Text;
    canEdit?:boolean = false;
    orderDirection?:string;
}

export enum EOutputColumnType{
    Text,
    CheckBox,
    Date

}