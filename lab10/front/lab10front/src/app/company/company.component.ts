import { Component, OnInit } from '@angular/core';
import { ServicehhService } from '../servicehh.service';
import { Company } from '../company';
import { Vacancy } from '../vacancy';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company',
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent  implements OnInit {
  companies: Company[] = [];


  constructor(private apiService: ServicehhService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  showVacancies(companyId: number): void {
    this.router.navigate(['/companies', companyId, 'vacancies']);
   
  }
}


