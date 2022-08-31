import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  filterValue:any;
  constructor() { }

  ngOnInit(): void {
  }
  applyFilter(event: Event){
    this.filterValue = (event.target as HTMLInputElement).value;
  }
}
