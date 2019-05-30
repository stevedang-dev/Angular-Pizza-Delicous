import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-full-size-image',
  templateUrl: './hero-full-size-image.component.html',
  styleUrls: ['./hero-full-size-image.component.scss']
})
export class HeroFullSizeImageComponent implements OnInit {
	@Input() logoMenu: any;
  constructor() { }

  ngOnInit() {
  }

}
