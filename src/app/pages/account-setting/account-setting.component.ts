import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';


@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [
  ]
})
export class AccountSettingComponent implements OnInit {

  // public linktTheme = document.querySelector('#theme');// se comunica el id pulsado
  // public links: NodeListOf<Element>; //obtiene clase del div


  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    //this.links = document.querySelectorAll('.selector');//obtiene clase del div // se dispara despues de inicializado el componente
    this.settingsService.checkCurrentTheme(); //llamamos la funccion desde el servicio
  }

  changeTheme(theme:string){ //recibe la data del boton por medio de la clase theme:string

    this.settingsService.changeTheme(theme);// llamamos el servicio
  }

  /*checkCurrentTheme(){ //funcion para llamar desde un elemento html, class, div, id, svg!!
    this.links.forEach(elem => {

      elem.classList.remove('working'); //elimina la clase a cambiar
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl= `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linktTheme.getAttribute('href');

      if(btnTheme === currentTheme){
        elem.classList.add('working');
      }

    })


  }*/

}
