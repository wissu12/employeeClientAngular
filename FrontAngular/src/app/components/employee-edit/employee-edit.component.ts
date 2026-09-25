import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  constructor(private route: ActivatedRoute,private dataService: DataService) {
    
  }

  ngOnInit() {
    console.log('ID reçu de l\'employé à modifier :', this.route.snapshot.paramMap.get('id'));
    this.getEmployee({ id: Number(this.route.snapshot.paramMap.get('id')) });
  }

  getEmployee(id: { id: number }) {


    this.dataService.getDataById(id).subscribe(res=>{
      console.log('Données de l\'employé récupérées :', res);
      
    })

  }

}
