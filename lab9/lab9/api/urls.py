from django.urls import path
from api.views import (
     company_detail, company_vacancies,
    VacancyListCreateView, TopTenVacanciesView, VacancyDetailView, companiesListView
)
from .views import companiesListView

urlpatterns = [
    # Without DRF (using JsonResponse)
    # path('companies/', companies_list, name='companies-list'),
    path('companies/<int:id>/', company_detail, name='company-detail'),
    path('companies/<int:id>/vacancies/', company_vacancies, name='company-vacancies'),

    path('companies/', companiesListView.as_view() ,name='company-detail'),

    # With DRF (using generics and APIView)
    path('vacancies/', VacancyListCreateView.as_view(), name='vacancies-list-create'),
    path('vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
    path('vacancies/<int:id>/', VacancyDetailView.as_view(), name='vacancy-detail'),
]
