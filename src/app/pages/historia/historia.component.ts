import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent {
  
  @ViewChild('mySwiper') mySwiperRef: ElementRef | undefined;
  swiper!: Swiper


  constructor( ) {}

  slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  addNumber() {
    const length = this.slides.length;
    this.slides.push(length + 1);
    this.rechargeSwiper()
    
  }

  deleteNumber() {
    this.slides.pop();
    this.rechargeSwiper()
  }

  rechargeSwiper(){
    this.swiper = this.mySwiperRef?.nativeElement.swiper;
    this.swiper = new Swiper(this.mySwiperRef?.nativeElement)
    console.log({swiper: this.swiper });
  }
}
