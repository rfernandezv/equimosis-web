import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'equimosis-web-registerbruise',
  templateUrl: './registerbruise.component.html',
  styleUrls: ['./registerbruise.component.css']
})
export class RegisterbruiseComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  submitted = false;
  returnUrl: string;

  constructor() { }

  ngOnInit() {
    this.returnUrl = 'bruisedatingresult';
  }

  onSubmit(){
    this.submitted = true;
  }

  preview(files) {
  if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]);
  reader.onload = (_event) => {
    this.imgURL = reader.result;
  }
}

}
