from django.urls import path
from api import views

urlpatterns = []
if hasattr(views, 'ProductListAPIView'):
    urlpatterns += [
        path('products/', views.ProductListAPIView.as_view()),
        path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
    ]
elif hasattr(views, 'products_list'):
    urlpatterns += [
        path('products/', views.products_list),
        path('products/<int:product_id>/', views.product_detail),
    ]

if hasattr(views, 'CategoryListAPIView'):
    urlpatterns += [
        path('categories/', views.CategoryListAPIView.as_view()),
        path('categories/<int:id>/', views.CategoryDetailAPIView.as_view()),
        path('categories/<int:id>/products/', views.CategoryProductsAPIView.as_view()),
    ]