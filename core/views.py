from django.shortcuts import render
from django.views.generic import TemplateView


class MessengerView(TemplateView):
    template_name = 'core/index.html'
