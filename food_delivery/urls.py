"""food_delivery URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core.views import base, product, addCart, cart, removeCart, about, search, signup, signin, signout, order
from django.conf import settings
from django.conf.urls.static import static
from food_delivery.settings import STATIC_ROOT, STATIC_URL, MEDIA_URL, MEDIA_ROOT
# from django.contrib.auth.models import User
urlpatterns = [
    path('', base, name='base'),
    path('product/<int:id>', product, name='product'),
    path('addCart/<int:pk>', addCart, name='addCart'),
    path('cart', cart, name='cart'),
    path('removeCart/<int:id>', removeCart, name='removeCart'),
    path('about', about, name='about'),
    path('search', search, name='search'),
    path('signin', signin, name='signin'),
    path('signup', signup, name='signup'),
    path('signout', signout, name='signout'),
    path('order', order, name='order'),
    path('admin/', admin.site.urls),
]

urlpatterns += static(STATIC_URL, document_root=STATIC_ROOT)  
urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
