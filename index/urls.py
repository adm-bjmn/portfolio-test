from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name = 'home'),
    path('contact', views.contact, name = 'contact'),
    path('web_apps', views.web_apps, name = 'web_apps'),
    path('tools', views.tools, name = 'tools'),
    path('python_pro', views.python_pro, name = 'python_pro'),
    path('data_work', views.data_work, name = 'data_work'),
]