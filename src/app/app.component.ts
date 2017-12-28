import { DataTableButton } from './models/datatable-button.model';
import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import {DataTableColumn,EOutputColumnType } from './models/datatable-column.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  columns: DataTableColumn[] = 
  [
    {
      header:'Id', dataField:'id'
    }, {
      header:'Nome', dataField:'nome'
    }, {
      header:'CPF', dataField:'cpf'
    }, {
      header:'Data de Nascimento', dataField:'dataNascimento', outputType:EOutputColumnType.Date
    }, {
      header:'Telefone', dataField:'telefone', outputType:EOutputColumnType.Text
    }, {
      header: 'Ativo', dataField:'ativo', outputType:EOutputColumnType.CheckBox
    }
  ];

  buttons:DataTableButton[]=
  [{
    icon:'remove_red_eye',
    action: this.viewRecord,
    color:'#0000ff7a'
  },{
    icon:'edit',
    action: this.editRecord,
    color: '#ffa700db'
  },{
    icon:'delete',
    action: this.removeRecord,
    color:'#ff00009e'
  }
];

  editRecord(record:any){
    alert('Calling edit for: '+ record.nome);
    console.log(`edit: ${record}`);
  }

  removeRecord(record:any){
    alert('Calling remove for: '+ record.nome);
    console.log(`remove: ${record}`);
  }

  viewRecord(record:any){
    alert('Calling view for: '+ record.nome);
    console.log(`view: ${record}`);
  }
}
