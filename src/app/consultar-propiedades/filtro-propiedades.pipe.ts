import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPropiedades'
})
export class FiltroPropiedadesPipe implements PipeTransform {
  transform(propiedades: any[], CriterioBusqueda: string): any[] {
    if (!propiedades || !CriterioBusqueda) {
      return propiedades;
    }

    CriterioBusqueda = CriterioBusqueda.toLowerCase();

    return propiedades.filter(propiedad => {
      return propiedad.descripcion.toLowerCase().includes(CriterioBusqueda);
    });
  }
}
