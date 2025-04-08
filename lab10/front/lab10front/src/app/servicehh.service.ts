import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class ServicehhService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies/`);
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/companies/${companyId}/vacancies/`);
  }
 
  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/vacancies/`);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.baseUrl}/vacancies/${id}/`);
  }

  getTopTenVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/vacancies/top_ten/`);
  }
}
