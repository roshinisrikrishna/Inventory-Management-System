from django.shortcuts import render
from django.http import HttpRequest, HttpResponse, JsonResponse
from rest_framework import generics
from .models import Inventory
from .serializer import InventorySerializer
from django_pandas.io import read_frame
import plotly
import plotly.express as px
import json

# Create your views here.
class InventoryList(generics.ListCreateAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

class InventoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

def dashboard(request):
    inventories = Inventory.objects.all()
    df = read_frame(inventories)
    sales_graph = df.groupby(by="last_sales_date", as_index=False, sort=False)['sales'].sum()
    sales_graph = px.line(sales_graph, x=sales_graph.last_sales_date, y=sales_graph.sales, title="Sales Trend")
    sales_graph = json.dumps(sales_graph, cls=plotly.utils.PlotlyJSONEncoder)

    return JsonResponse({"sales_graph": sales_graph})
   
    

def helloWorld(HttpRequest):
    return HttpResponse("Hello World")