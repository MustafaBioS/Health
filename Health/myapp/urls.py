from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name='Home'),
    path("logout", views.logout_view, name="Logout"),
    path("login", views.login_view, name="Login"),
    path("create", views.create, name="Create"),
]