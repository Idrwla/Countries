import {Component, OnInit, Input, Inject} from '@angular/core';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {
  @Input() CountryInfo:CountryInfoComponent;
  title:string;
  area:number;
  additionalInfoUrl:string;
  flag:string;
  constructor() {}

  ngOnInit(): void {

  }
  changeTitle(event){
    this.CountryInfo.title = event.target.value;
  }
  changeArea(event){
    this.CountryInfo.area = event.target.value;
  }
  changeAdditionalInfo(event){
    this.CountryInfo.additionalInfoUrl = event.target.value;
  }
}
