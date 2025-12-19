from django.shortcuts import render, redirect
from .models import Users
from django.contrib.auth import logout

# Create your views here.
def home(request):
    items = Users.objects.all()
    return render(request, "nutrition.html", {"users": items})

def login_view(request):
    return render(request, "login.html")

def create(request):
    return render(request, "create.html")

def logout_view(request):
    logout(request)
    return redirect('Home')
