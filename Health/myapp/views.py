from django.shortcuts import render, redirect
from .models import Users
from django.contrib.auth import get_user_model
from django.contrib.auth import logout, authenticate, login
from django.contrib import messages
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required(login_url='Login')
def nutrition(request):
    return render(request, "nutrition.html")

@login_required(login_url='Login')
def water(request):
    return render(request, "water.html", {'user': request.user})

@login_required(login_url='Login')
def sleep(request):
    return render(request, "sleep.html", {'user': request.user})

def login_view(request):
    if request.method == "POST":
        User = get_user_model()
        identifier = request.POST.get("user")
        password = request.POST.get("pass")

        user = None

        user = authenticate(request, username=identifier, password=password)

        if user is None:
            try:
                user_obj = User.objects.get(email=identifier)
                user = authenticate(request, username=user_obj.username, password=password)
            except User.DoesNotExist:
                user = None

        if user is not None:
            login(request, user)
            messages.success(request, "Logged In Successfully")
            return redirect("Home")
        else:
            messages.error(request, "Invalid Credentials")
            return redirect("Login")

    return render(request, "login.html")

def create(request):
    if request.method == "POST":
        username = request.POST.get("user")
        email = request.POST.get("email")
        password = request.POST.get("pass")

        if Users.objects.filter(username=username).exists() and Users.objects.filter(email=email).exists():
            messages.error(request, "Username And Email Already Exits")
            return redirect("Create")

        elif Users.objects.filter(username=username).exists():
            messages.error(request, "Username Already Exists")
            return redirect("Create")

        elif Users.objects.filter(email=email).exists():
            messages.error(request, "Email Already Exists")
            return redirect("Create")

        user = Users.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "Account Created Successfully")
            return redirect("Home")

    return render(request, "create.html")

@login_required(login_url='Login')
def settings(request):
    return render(request, "settings.html")

@login_required(login_url='Login')
def logout_view(request):
    logout(request)
    return redirect('Home')
