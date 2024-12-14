 function submitForm(event){
    event.preventDefult();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const Subject = document.getElementById('subject').value;
    const massage = document.getElementById('massage').value;

    // تحقق من أن جميع الحقول تم تعبئتها
    if (!name  !email  !phone || !order) {
        alert("يرجى ملء جميع الحقول.");
        return;
    }

    // يمكن إرسال البيانات عبر API أو تخزينها في قاعدة بيانات (هنا سنعرض رسالة تأكيد)
    console.log("البيانات المدخلة:");
    console.log(name: ${name});
    console.log(email: ${email});
    console.log(Subject: ${Subject});
    console.log(massage: ${massage});

    // إخفاء نموذج الطلب وعرض رسالة التأكيد
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
}