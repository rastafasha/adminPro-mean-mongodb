import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Menu desde sidebarService',
      icono: 'mdi mdi-gauge',
      submenu:[
        {titulo: 'Main', url:'/'},
        {titulo: 'progressBar', url:'progress'},
        {titulo: 'Donas', url:'grafica1'},
        {titulo: 'Promesas', url:'promesas'},
        {titulo: 'Rxjs', url:'rxjs'},
      ]
    },//para agregar otro menu solo es copiar este arreglo


  ]

  constructor() { }
}
