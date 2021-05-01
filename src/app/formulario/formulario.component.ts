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
    descripcion: ''  
  }

  constructor(
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  form(){
    this.authService.formulario(this.formulario)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/privadas']);
        },
        err => console.log(err)
  
      )
       
      // console.log(this.user);

  }

}
