from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet

router = DefaultRouter() 
router.register(r'categories', CategoryViewSet) 
router.register(r'products', ProductViewSet) 
urlpatterns = [
    path('', include(router.urls)),
]


# new_cat = Category.objects.create(name="Phones")
# #Product.objects.create(
#     name="iPhone 15", 
#     price=450000, 
#     description="New phone", 
#     count=5, 
#     category=new_cat
# )