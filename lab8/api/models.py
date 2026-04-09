from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name
    
    
class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='example')
    
    
    def __str__(self):
        return self.name