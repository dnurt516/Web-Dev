# from django.shortcuts import render
# from .models import Category, Product
# from django.shortcuts import get_object_or_404
# from django.http import JsonResponse
# # Create your views here.

# def product_list(request):
#     products = Product.objects.all()
#     data = {"products": list(products.values())}
#     return JsonResponse(data)

# def product_detail(request, id):
#     product = get_object_or_404(Product, id=id)
#     data = {
#         "id": product.id,
#         "name": product.name,
#         "price": product.price,
#         "description": product.description,
#         "count": product.count,
#         "category": product.category.name
#     }
#     return JsonResponse(data)

# def category_list(request):
#     categories = Category.objects.all()
#     data = {"categories": list(categories.values())}
#     return JsonResponse(data)

# def category_detail(request, id):
#     category = get_object_or_404(Category, id=id)
#     data = {
#         "id": category.id,
#         "name": category.name,
#         "products": list(category.products.values())
#     }
#     return JsonResponse(data)

# def category_products(request, id):
#     category = get_object_or_404(Category, id=id)
#     products = category.example.all()
#     products_data = []
#     for p in products:
#         products_data.append({
#             "id": p.id,
#             "name": p.name,
#             "price": p.price,
#             "description": p.description,
#             "count": p.count
#         })
        
#     return JsonResponse({"products": products_data})


from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.example.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet): 
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


