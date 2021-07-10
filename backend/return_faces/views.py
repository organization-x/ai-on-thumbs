from django.shortcuts import render
from django.http import HttpResponse
import base64
from django.views.decorators.csrf import csrf_exempt
import json
import cv2 
import numpy as np
from .models import *

# Create your views here.
@csrf_exempt
def return_faces(request):
    if request.method=="POST":

        data = json.loads(request.body)

        image_base64 = data["base_64"]
        np_image = np.fromstring(base64.b64decode(image_base64), dtype="uint8")
        picture = cv2.imdecode(np_image, 1)

        faceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

        #convert picture to grayscale
        gray = cv2.cvtColor(picture, cv2.COLOR_BGR2GRAY)

        # Detect faces in the image
        faces = faceCascade.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=5,
            minSize=(30, 30),
            flags = cv2.CASCADE_SCALE_IMAGE
        )

        #print the number of faces found
        print(f"Found {len(faces)} faces!")

        # Draw a rectangle around the faces
        for (x, y, w, h) in faces:
            cv2.rectangle(picture, (x, y), (x+w, y+h), (0, 255, 0), 2)

        _, encoded_img = cv2.imencode('.png', picture)

        #show the image with the rectangle drawn around it
        return HttpResponse(base64.b64encode(encoded_img).decode('utf-8'))

@csrf_exempt
def return_course_content(request):
        
    data = json.loads(request.body)

    user_num = data["course"]
    course_heading = Course.objects.filter(course_number=user_num)[0].get_heading()
    course_lessons = list(map(lambda lesson: lesson.get_content(), Lesson.objects.filter(course=user_num).order_by('lesson_number').all()))


    course_info = {"course_heading": course_heading, "course_lessons": course_lessons}

    return HttpResponse(json.dumps(course_info), content_type="application/json")

@csrf_exempt
def return_lesson_content(request):

    data = json.loads(request.body)

    course_num = data["course"]
    lesson_num = data["lesson"]

    lesson = Lesson.objects.filter(course=course_num).order_by('lesson_number')[lesson_num-1]

    return HttpResponse(json.dumps(lesson.get_content()), content_type="application/json")