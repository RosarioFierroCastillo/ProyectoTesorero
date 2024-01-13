import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvitacionService {

  constructor(private http: HttpClient) { }


//private apiUrl = 'https://evaluacionesuas-001-site1.gtempurl.com/Acuerdos';
private apiUrl = 'https://localhost:44397/api/Usuarios'; 
  
generarInvitacion(token: string,correo_electronico: string, id_fraccionamiento: number,id_lote:number,nombre_fraccionamiento:string,nombre_admin:string,tipo_usuario:string) {
  return this.http.post(`${this.apiUrl}/Generar_invitacion?token=${token}&correo_electronico=${correo_electronico}&id_fraccionamiento=${id_fraccionamiento}&id_lote=${id_lote}&nombre_fraccionamiento=${nombre_fraccionamiento}&nombre_admin=${nombre_admin}&tipo_usuario=${tipo_usuario}`,{}, { responseType: 'text' });
}

}
