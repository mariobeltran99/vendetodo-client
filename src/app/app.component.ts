import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ApiService } from '../app/services/api.service';
import { Visits } from './models/visits';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  chartOptions: any;

  constructor(private primengConfig: PrimeNGConfig, private api:ApiService){}
  ngOnInit(){


    this.api.getVisits().subscribe(datas => {
      let vists: Visits[] = [];
      let numberVisits: number[] = [];
      let department:string[] = []
      vists = datas;
      for(let i = 0; i < vists.length; i++){
        numberVisits[i] = vists[i].visita;
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
    this.primengConfig.ripple = true;
  }
}
