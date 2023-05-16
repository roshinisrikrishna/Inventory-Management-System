from rest_framework import serializers
from .models import Inventory

class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ('id','name','cost_per_item','quantity_in_stock','quantity_sold','sales','stock_date','last_sales_date')

