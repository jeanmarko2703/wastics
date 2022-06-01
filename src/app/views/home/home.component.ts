import {
  Component,
  OnInit,
  Renderer2,
  OnDestroy,
  HostListener,
  ElementRef,
} from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    img{
      height:300px;
      width:300px;
      transform: scaleX(-1);
    },
    div{
      margin:15px;
    },
    div.center{
      position: absolute;
      top: 15% ;
      left: 15% ;
    }

    #logomenu{

      width: 200px;
      height: 50px;
      
      
    }

    h1{
      color:white;
    }

    
    
    `
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2, private elRef: ElementRef, private scrollToService: ScrollToService) { }

  showMobileMenu = false;

  buyUrl = environment.buyUrl;
  adminRoot = environment.adminRoot;








  ngOnInit(): void {
    this.renderer.addClass(document.body, 'no-footer');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'no-footer');
  }



  @HostListener('window:click', ['$event'])
  onClick(event): void {
    this.showMobileMenu = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    this.showMobileMenu = false;
  }

  scrollTo(target): void {
    const config: ScrollToConfigOptions = {
      target,
      offset: -150
    };

    this.scrollToService.scrollTo(config);
  }
}
