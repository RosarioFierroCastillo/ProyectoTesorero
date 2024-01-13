import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { usuario, usuarios } from "../modelos/usuarios"
import { fraccionamiento, fraccionamientos } from "../modelos/fraccionamientos"
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-consultar-usuarios-tesorero',
  templateUrl: './consultar-usuarios-tesorero.component.html',
  styleUrls: ['./consultar-usuarios-tesorero.component.css']
})
export class ConsultarUsuariosTesoreroComponent {
  usuario = new usuario();
  usuarios: usuarios[] = [];
  UserGroup: FormGroup;
  fraccionamientos: fraccionamientos[] | undefined;
  id_fracc: any;
  tipo_usuario: any;
  filtroUsuarios: "" | undefined;

  
  ngOnInit(): void {

    this.fetchDataUsers(this.dataService.obtener_usuario(3));
  }

  fetchDataUsers(id_administrador: any) {
    console.log("id admiiiiiiiiiiiiiiiiiiiiiiin: "+ id_administrador);
    this.dataService.fetchDataUsers(id_administrador).subscribe((usuarios: usuarios[]) => {
      console.log("fetch", usuarios);
      this.usuarios = usuarios;
    });
  }

  delete(usuario: any) {
    this.id_fracc = usuario['id_persona'];
    return this.http.delete("https://localhost:44397/api/Personas/Eliminar_Persona?id_persona=" + this.id_fracc).subscribe(
      () => {
        this.fetchDataUsers(this.dataService.obtener_usuario(1));
        console.log("hola");
        this.UserGroup.reset();


      })


  }


  
  constructor(private http: HttpClient, private dataService: DataService, private fb: FormBuilder) {

    this.UserGroup = this.fb.group({
      id_persona: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido_pat: ['', Validators.required],
      apellido_mat: ['', Validators.required],
      tipo_usuario: ['', Validators.required],
      id_lote: ['', Validators.required],
      telefono: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      correo: ['', Validators.required],
      contrasenia: ['', Validators.required],
      confirmarContrasena: ['', Validators.required],
      id_fraccionamiento: ['', Validators.required], 

    })
  }
}
