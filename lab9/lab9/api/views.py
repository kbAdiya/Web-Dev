from django.shortcuts import render
from rest_framework import generics
from django.http import JsonResponse
from api.models import Company, Vacancy
from api.serializers import VacancySerializer
from api.serializers import CompanySerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

# without drf just get
# @csrf_exempt
# def companies_list(request):
#     companies = Company.objects.all()
#     companies_json = [{"id": c.id, "name": c.name, "description": c.description, "city": c.city, "address": c.address} for c in companies]
#     return JsonResponse(companies_json, safe=False)


def company_detail(request, id):
    try:
        company = Company.objects.get(pk=id)
        company_json = {"id": company.id, "name": company.name, "description": company.description, "city": company.city, "address": company.address}
        return JsonResponse(company_json)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)


def company_vacancies(request, id):
    try:
        vacancies = Vacancy.objects.filter(company_id=id)
        vacancies_json = [{"id": v.id, "name": v.name, "description": v.description, "salary": v.salary} for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

#with drf using gerenics get post
class VacancyListCreateView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class companiesListView(generics.ListCreateAPIView):
    queryset=Company.objects.all()
    serializer_class=CompanySerializer


#with ApiView also drf get put delete

class VacancyDetailView(APIView):
    def get_object(self, id):
        try:
            return Vacancy.objects.get(pk=id)
        except Vacancy.DoesNotExist:
            return None

    def get(self, request, id):
        vacancy = self.get_object(id)
        if vacancy is None:
            return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, id):
        vacancy = self.get_object(id)
        if vacancy is None:
            return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()  # Updates in DB
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        vacancy = self.get_object(id)
        if vacancy is None:
            return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)

        vacancy.delete()
        return Response({'message': 'Vacancy deleted'}, status=status.HTTP_204_NO_CONTENT) 
       
#with drf apiview
class TopTenVacanciesView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)