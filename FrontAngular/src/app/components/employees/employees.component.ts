import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/class/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];
  emp=new Employee();

  constructor(private dataService: DataService) {
  }

  getEmployees() {
    this.dataService.getData().subscribe({
      next: (data: any) => {
        this.employees = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données :');
        console.error(error);
      },
      complete: () => {
        console.log('Requête terminée');
      }
    });
  }

  addEmployee() {

    this.dataService.insertData(this.emp).subscribe(res=>{
      this.getEmployees();
    })
  
  }
  deleteEmployee(id: { id: number }) {
    console.log('Supprimer un employé avec l\'ID :', id);
    // Implémentez la logique pour supprimer l'employé avec l'ID spécifié
    this.dataService.deleteData(id).subscribe(res=>{
      this.getEmployees();
    })

  }

  editEmployee(id: { id: number }) {
  
    // Implémentez la logique pour supprimer l'employé avec l'ID spécifié
    this.dataService.editData(id).subscribe(res=>{
      this.getEmployees();
    })

  }
   

  ngOnInit(): void {

    this.getEmployees();

  }

}