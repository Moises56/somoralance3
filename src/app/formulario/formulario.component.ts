import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario = {
    nombre: '',
    descripcion: '',  
  }

  constructor(
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  form(){
    console.log(this.formulario);
    this.authService.formulario(this.formulario)
      .subscribe(
        res => {
          console.log(this.formulario);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/privadas']);
        },
        err => console.log(err)
  
      )
       
      // console.log(this.user);

  }

}
