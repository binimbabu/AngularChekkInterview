import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  @Input() backgroundColor:string = 'green';
	@Input() foregroundColor:string = 'blue';
	@Input() hoverBackgroundColor:string = 'gray';
	@Input() hoverForegroundColor:string = 'orange';
 
	@HostBinding('style.backgroundColor') bgColor:string;
	@HostBinding('style.color') color:string;  
	constructor() {
  }
	ngOnInit() {
		this.bgColor = this.backgroundColor;		
		this.color = this.foregroundColor;
    
  	}
	@HostListener('mouseenter') onMouseEnter(eventData: Event) {
		this.bgColor = this.hoverBackgroundColor;		
		this.color = this.hoverForegroundColor;				    	
  	}

}
