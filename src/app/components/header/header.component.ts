import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  currentRoute: string = '';

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
        console.log('Rota Atual:', this.currentRoute);
        this.updateHeaderNavSpanPosition();
      }
    });
  }

  ngAfterViewInit() {
    this.updateHeaderNavSpanPosition();
  }

  updateHeaderNavSpanPosition() {
    const span = document.querySelector('.header-nav-span');
    if (span) {
      switch (this.currentRoute) {
        case '/about':
          this.setSpanPosition(span, '160px', '95px');
          break;
        case '/skills':
          this.setSpanPosition(span, '270px', '130px');
          break;
        case '/experience':
          this.setSpanPosition(span, '430px', '130px');
          break;
        case '/education':
          this.setSpanPosition(span, '590px', '110px');
          break;
        case '/projects':
          this.setSpanPosition(span, '730px', '95px');
          break;
        default:
          this.setSpanPosition(span, '65px', '95px');
      }
    }
  }

  setSpanPosition(span: any, left: string, width: string) {
    this.renderer.setStyle(span, 'left', left);
    this.renderer.setStyle(span, 'width', width);
  }
}
