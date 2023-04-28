import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input() img:string='';
  @Output() loaded = new EventEmitter <string>();

  imgDefault = 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg'
  imgError(){
    this.img = this.imgDefault
  }
  imgLoaded(){
    this.loaded.emit(this.img)
  }
}
