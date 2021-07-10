from django.db import models

# Create your models here.
class Course(models.Model):
    course_number = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)

    def get_heading(self):
        return {
            "title": self.title,
            "description": self.description
        }

    def __str__(self):
        return "Course " + str(self.course_number)

class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    lesson_title = models.CharField(max_length=100)
    lesson_number = models.IntegerField(primary_key=True)
    content = models.CharField(max_length=300)

    image_url = models.CharField(max_length=500)

    is_code = models.BooleanField()
    code = models.CharField(max_length=200)

    def __str__(self):
        return "Lesson " + str(self.lesson_number)

    def get_content(self):
        return {
            "lesson_number": self.lesson_number,
            "lesson_title": self.lesson_title,
            "lesson_content": self.content,
            "image": self.image_url,
            "is_code": self.is_code,
            "code": self.code
        }