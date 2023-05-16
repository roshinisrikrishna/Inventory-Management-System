from django import urls
from django.urls import path
from .views import InventoryList,InventoryDetail,helloWorld,dashboard

urlpatterns = [
    path('items/',InventoryList.as_view(),name='items-list'),
    path('items/<int:pk>/',InventoryDetail.as_view(),name='user-detail'),
    path('hello/',helloWorld,name='hello-world'),
    path('sales_dashboard/',dashboard,name='sales_dashboard'),
]