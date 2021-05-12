import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ApiService } from '../app/services/api.service';
import { Rating } from './models/rating';
import { Users } from './models/users';
import { Visits } from './models/visits';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  data1: any;
  data2: any;

  constructor(private primengConfig: PrimeNGConfig, private api:ApiService){}
  ngOnInit(){
    this.primengConfig.ripple = true;
    this.api.getVisits().subscribe(datas => {
      let vists: Visits[] = [];
      let numberVisits: number[] = [];
      let department:string[] = []
      vists = datas;
      for(let i = 0; i < vists.length; i++){
        numberVisits.push(vists[i].visita);
        department.push(vists[i].departamento);
      }
      this.data = {
        labels: department,
        datasets: [
            {
                data: numberVisits,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#AADF56"
                ]
            }]
      };
    });
    this.api.getUsersDepartments().subscribe(datas1 => {
      let users: Users[] = [];
      let numberusers: number[] = [];
      let department: string[] = [];
      users = datas1;
      for(let i = 0; i < users.length; i++){
        department.push(users[i].departamento);
        numberusers.push(users[i].cantidad_usuarios);
      }
      this.data1 = {
        labels: department,
        datasets: [
          {
            data: numberusers,
            backgroundColor: [
              "#de8971",
              "#7b6079",
              "#a7d0cd",
              "#ffe9d6"
          ]
        }
      ]
      };
    });
    this.api.gerProductsRating().subscribe(datas2 => {
      let ratings:Rating[] = [];
      let links:string[] = [];
      let numberRating:number[] = [];
      ratings = datas2;
      for(let i = 0; i < ratings.length; i++){
        links.push("http://127.0.0.1:8000/viewProduct/" + ratings[i].id_producto);
        numberRating.push(Number(ratings[i].promedio_estrellas));
      }
      this.data2 = {
          labels: links,
          datasets:[
            {
              label: "Valoraciones",
              backgroundColor: [
                '#EC407A',
                '#AB47BC',
                '#42A5F5',
                '#7E57C2',
                '#66BB6A',
                '#FFCA28',
                '#26A69A',
                '#4b778d',
                '#28b5b5',
                '#8fd9a8',
                '#d2e69c'
              ],
              data: numberRating
            }
          ]
      }
    });
  }
}
