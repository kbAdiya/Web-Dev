import { Component, OnInit } from '@angular/core';
import { ServicehhService } from '../servicehh.service';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from '../vacancy';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vacancies',
  imports: [CommonModule],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private apiService: ServicehhService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getCompanyVacancies(companyId).subscribe((data) => {
      this.vacancies = data;
    });
  }
}


