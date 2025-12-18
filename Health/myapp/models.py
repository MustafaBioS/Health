from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Users(AbstractUser):
    pfp = models.CharField(max_length=128, default="static/pfp/pfp.png")