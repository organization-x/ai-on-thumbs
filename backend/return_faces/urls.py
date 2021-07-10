from django.urls import path
from . import views

urlpatterns = [
    path('image', views.return_faces, name="return faces"),
    path('course', views.return_course_content),
    path('lesson', views.return_lesson_content),
]