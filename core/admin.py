from django.contrib import admin
from .models import Category, FoodCard, ProductsCart, Customer, Order
# Register your models here.
admin.site.register(Category)
admin.site.register(FoodCard)
admin.site.register(ProductsCart)
admin.site.register(Customer)
admin.site.register(Order)