from django.shortcuts import render, HttpResponse
from .models import Users

# Create your views here.
def home(request):
    return render(request, "base.html")

def users(request):
    items = Users.objects.all()
    return render(request, "nutrition.html", {"users": items})