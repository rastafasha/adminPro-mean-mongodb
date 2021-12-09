import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.baseUrl

@Pipe({
  name: 'imagenPipe'
})
export class ImagenPipePipe implements PipeTransform {

  transform(img: string, tipo: 'usuarios'|'medicos'|'hospitales'): string {

    if(!img){
      return `${base_url}/uploads/hospitales/no-image.jpg`;
    } else if(img.includes('https')){
      return img;
    } else if(img){
      return `${base_url}/uploads/${tipo}/${img}`;
    }else {
      return `${base_url}/uploads/hospitales/no-image.jpg`;
    }


  }

}
