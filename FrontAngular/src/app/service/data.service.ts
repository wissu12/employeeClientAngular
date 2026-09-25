import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   private apiUrl = 'http://localhost:8000/api/employees';

  constructor(private httpClient: HttpClient) { }

  getData() {
      return this.httpClient.get(this.apiUrl + '/All');
  }

  insertData(data: Employee) {
      return this.httpClient.post(this.apiUrl + '/create', data);
  }
  deleteData(id: { id: number }) {
      return this.httpClient.delete(this.apiUrl + '/delete/'+ id);
  }
  editData(id: { id: number }) {
      return this.httpClient.put(this.apiUrl + '/update/'+ id, id);
  } 
  getDataById(id: { id: number }) {
      return this.httpClient.get(this.apiUrl + '/'+ id);
  }

}
