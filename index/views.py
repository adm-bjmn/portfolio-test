from django.shortcuts import render
from django.core.mail import send_mail


def home(request):
    return render(request, 'index/home.html')


def contact(request):
    if request.method == 'POST':
        name = request.POST['Name']
        email = request.POST['Email']
        message = request.POST['Message']
        # send an email
        send_mail(
            f'New Enquiry from {name}',  # subect
            message,  # message
            email,  # from
            ['adm.bjmn@gamil.com'],  # to email
        )
        return render(request, 'contact/contact.html', {'name': name})
    else:
        return render(request, 'contact/contact.html', {})
    
def web_apps(request):
    return render(request, 'web_apps/web_apps.html')
def tools(request):
    return render(request, 'tools/tools.html')
def python_pro(request):
    return render(request, 'python_pro/python_pro.html')
def data_work(request):
    return render(request, 'data_work/data_work.html')