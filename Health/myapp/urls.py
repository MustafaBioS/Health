from django.urls import path
from . import views

urlpatterns = [
    path("", views.login_view, name="Login"),
    path("create/", views.create, name="Create"),
    path("logout/", views.logout_view, name="Logout"),
    path("settings/", views.settings, name="Settings"),
    path("nutrition/", views.nutrition, name='Home'),
    path("water/", views.water, name="Water"),
    path("sleep/", views.sleep, name="Sleep"),
]