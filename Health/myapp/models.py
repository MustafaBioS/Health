from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Users(AbstractUser):
    email = models.EmailField(max_length=128, unique=True)
    pfp = models.ImageField(max_length=128, default="images/defaultPfp.png", upload_to="images/")