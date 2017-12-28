import { DataTableButton } from './../../models/datatable-button.model';
import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { DataTableColumn } from '../../models/datatable-column.model';

@Component({
    selector: 'ngx-datatable-dynamic',
    templateUrl: './ngx-datatable-dynamic.component.html',
    styleUrls: ['./ngx-datatable-dynamic.component.css']
})
export class NgxDatatableDynamic {
    @Input() ajaxUrl: string;
    @Input() columns: DataTableColumn[];
    @Input() sortAll: boolean;
    @Input() pagination: boolean;
    @Input() rowsPerPage: number;
    @Input() buttons: DataTableButton[];
    _results: any;
    _headers: string[];
    _data
    _filter = <IFilter>{};
    _totalRows: number;
    _pages: number[] = [];

    selectRowsPerPage = [2, 5, 10, 25, 50, 100];

    constructor(private http: Http) { }

    ngOnInit() {
        if (this.pagination) {
            this._filter.rowsPerPage = this.rowsPerPage;
            this._filter.page = 1;
            this._filter.orderBy = [];
        }
        this.getResults();
    }

    getResults() {
        
        this.http.post(this.ajaxUrl, this._filter)
            .subscribe(data => {
                let result = data.json();
                this._results = result.data;
                this._totalRows = result.total;
                this._pages = [];
                let maxPage = Math.ceil(result.total / this._filter.rowsPerPage);
                
                for (let i = 1; i <= maxPage; i++)
                    this._pages.push(i);
            });
    }

    setPage(page: number) {
        this._filter.page = page;
        this.getResults();
    }

    setOrder(dataField: string, ev: any, column: DataTableColumn) {
        console.log();
        var hasDataField = this._filter.orderBy.filter((value) => {
            return value.field == dataField;
        });
        if (ev.ctrlKey && hasDataField.length > 0) {
            let index = this._filter.orderBy.indexOf(hasDataField[0]);
            this._filter.orderBy.splice(index, 1);
            column.orderDirection = '';
        }
        else {
            if (hasDataField.length > 0) {
                var orderField = hasDataField[0];
                if (orderField.direction == 1) {
                    orderField.direction = 2;
                    column.orderDirection = 'arrow_downward'
                }
                else if (orderField.direction == 2) {
                    let index = this._filter.orderBy.indexOf(hasDataField[0]);
                    this._filter.orderBy.splice(index, 1);
                    column.orderDirection = '';
                }
            } else {
                this._filter.orderBy.push({ field: dataField, direction: 1 });
                column.orderDirection = 'arrow_upward';
            }
        }
        this._filter.page = 1;
        this.getResults();
    }
}
