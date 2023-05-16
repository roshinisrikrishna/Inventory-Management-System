from django.db import models

# Create your models here.
class Inventory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255,blank=False,null=False)
    cost_per_item = models.DecimalField(max_digits=19,decimal_places=2,null=False,blank=False)
    quantity_in_stock=models.IntegerField(null=False,blank=False)
    quantity_sold=models.IntegerField(null=False,blank=False)
    sales=models.DecimalField(max_digits=19,decimal_places=2,null=True,blank=True)
    stock_date=models.DateField(auto_now_add=True)
    last_sales_date = models.DateField(auto_now=True)


    def save(self, *args, **kwargs):
        self.sales=self.cost_per_item*self.quantity_sold
        super(Inventory,self).save(*args,**kwargs)

    def __str__(self) -> str:
        return self.name