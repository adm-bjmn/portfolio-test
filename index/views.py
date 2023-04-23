from django.shortcuts import render
from django.core.mail import send_mail


def home(request):
    if request.method == 'POST':
        name = request.POST['Name']
        email = request.POST['Email']
        message = request.POST['Message']
        # send an email
        send_mail(
            f'New Enquiry from {name}',  # subect
            message,  # message
            email,  # from
            ['adm.bjmn@gmail.com'],  # to email
        )
        return render(request, 'index/home.html', {'name': name})
    else:
        return render(request, 'index/home.html')
