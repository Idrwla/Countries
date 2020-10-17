import { Component, OnInit } from '@angular/core';
import {CountryInfoComponent} from "../country-info/country-info.component";

export interface ICountryInfo{
  title:string;
  area:number;
  additionalInfoUrl:string;
  flag:string;
  // changeTitle(event);
  // changeArea(event);
  // changeAdditionalInfo(event);
}
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  currentCountry:CountryInfoComponent;
  constructor() { }

  ngOnInit(): void {
  }
  ListOfCountries:ICountryInfo[]=[
    {title: 'Kazakhstan',area:2725000,additionalInfoUrl:'Казахстан – государство в Центральной Азии, которое раньше входило в состав СССР. Оно простирается от Каспийского моря на западе до Алтайских гор на востоке, где проходит граница с Китаем и Россией. ',flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1000px-Flag_of_Kazakhstan.svg.png'},
    {title : 'USA',area:9834000,additionalInfoUrl:'Соединенные Штаты Америки – государство, состоящее из 50 штатов, занимает значительную часть Северной Америки. Штат Аляска расположен на северо-западе континента, а Гавайи – в Тихом океане.',flag:'https://images-na.ssl-images-amazon.com/images/I/612hQjoIpCL._AC_SL1446_.jpg'},
    {title : 'Japan',area:377915,additionalInfoUrl:'Япония – островное государство в Тихом океане, которое славится своими густонаселенными городами, императорскими дворцами, национальными парками, храмами и святилищами.',flag:'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg'},
    {title : 'South Korea',area:100210,additionalInfoUrl:'Южная Корея (официальное название – Республика Корея) – восточноазиатская страна на южной половине Корейского полуострова. Между ней и Северной Кореей проходит одна из наиболее военизированных границ в мире.',flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/640px-Flag_of_South_Korea.svg.png'}
  ];
  seeAddInfo(event){
    this.currentCountry = event;
  }


}
