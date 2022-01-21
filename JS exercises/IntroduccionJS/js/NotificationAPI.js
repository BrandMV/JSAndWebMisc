const notificationBtn = document.querySelector('#btn')
notificationBtn.addEventListener('click', (e) => {
    Notification.requestPermission().then((result) => {
        console.log('result is ' + result);
    })

    if(Notification.permission == 'granted'){
        new Notification('This is a notification', {
            icon: 'https://picsum.photos/200/300',
            body: 'Notification example'
        })
    }
})