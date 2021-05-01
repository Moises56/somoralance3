import { Component, OnInit } from '@angular/core';
import { Tareas } from '../models/publicaciones';
import { TareasService } from '../services/tareas.service'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  // tareas = [];

  constructor(public tareaService: TareasService) { }

  ngOnInit(): void {
    this.getTareas();
    
    // console.log(this.tareaService.getTareas())
    // .subscribe(
    //   res => {
    //     console.log(res);
    //     this.tareasService.tareas = res
    //   },
    //   err => console.log(err)
    // )
  }

  getTareas(){
    this.tareaService.getTareas().subscribe(
      // res => console.log(res),
     (res) => {
        this.tareaService.tareas = res;
      },
      (err) => console.error(err)
    )
  }




}
