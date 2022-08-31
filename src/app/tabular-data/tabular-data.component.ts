import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {  Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableFilter } from 'mat-table-filter';

@Component({
  selector: 'app-tabular-data',
  templateUrl: './tabular-data.component.html',
  styleUrls: ['./tabular-data.component.css']
})
export class TabularDataComponent implements OnInit, AfterViewInit {
  displayedColumns = ["type", "content", "image", "authors"];
  products: any = [];
  tabData:any=[];
  tabularData:any=[];
  value:any;
  filterEntity: any;
  filterType: MatTableFilter;
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private httpClient : HttpClient) {
   
   }

  ngOnInit() {
    this.httpClient.get("assets/example.json").subscribe(data =>{
      this.products = data;
      this.tabData = this.products.data;
      this.tabularData = this.tabData
      this.dataSource = new MatTableDataSource(this.tabData); 
      
     
    });
    }
  
  ngAfterViewInit(): void {
    
   
  }
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.tabData = this.tabData.filter((item:any) => item.attributes.content.toLowerCase().includes(filterValue.toLowerCase())||item.attributes.display_properties.type.toLowerCase().includes(filterValue.toLowerCase()))
    this.dataSource = new MatTableDataSource(this.tabData); 
    if(filterValue === ''){
      this.dataSource = new MatTableDataSource(this.tabularData); 
    }
  }

  sortData(sort: Sort) {
    console.log("sort", sort)
    const data = this.tabData.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource = data;
      return;
    }

    this.dataSource = data.sort((a:any, b:any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'content':
          return this.compare(a.attributes.content, b.attributes.content, isAsc);
        case 'calories':
          return this.compare(a.calories, b.calories, isAsc);
          case 'carbs':
          return this.compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return this.compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }


 compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


}