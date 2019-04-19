import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(personName, businessName, businessGstNumber) {
    const obj = {
      personName,
      businessName,
      businessGstNumber
    };
    console.log(obj);
    return this.http.post(`${this.uri}/add`, obj);
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateBusiness(personName, businessName, businessGstNumber, id) {
    const obj = {
      personName,
      businessName,
      businessGstNumber
    };
    return this
      .http
      .post(`${this.uri}/update/${id}`, obj);
  }

  deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
