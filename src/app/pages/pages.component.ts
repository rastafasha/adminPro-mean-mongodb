import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';


declare function customInitFunctions(); //llamammos a la funcion que carga los js

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  year = new Date().getFullYear();


  constructor(
    private settingsService:SettingsService
  ) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
