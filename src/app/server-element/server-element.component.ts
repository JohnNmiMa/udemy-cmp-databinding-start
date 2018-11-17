import {Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  ViewChild,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is default.
                                            // None will disabled style encapsulation - styles will bleed out to all elements in DOM
                                            // Native will use real shadow DOM - assuming browser supports it
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { }

  // All of the LifeCycle hooks
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content at OnInit: ' + this.header.nativeElement.textContent);
    console.log('Paragraph Content at OnInit: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngChanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text Content at AfterContentInit: ' + this.header.nativeElement.textContent);
    console.log('Paragraph Content at AfterContentInit: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
    console.log('Text Content at AfterContentChecked: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content at AfterViewInit: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
