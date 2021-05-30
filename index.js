var countdownElement = document.getElementById('countdown');
var bgimageId = document.getElementById('bg-img')
var initialCountdown = countdownElement.innerHTML;
setInterval(function () {
    initialCountdown = initialCountdown > 0 ? initialCountdown - 1 : 0;
    countdownElement.innerHTML = initialCountdown;

    switch (initialCountdown) {
        case 1:
            var bgpath = 'https://images.unsplash.com/photo-1516748797119-1456fdcc3201?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80';
            break;
        case 2:
            bgpath= 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';
            break;
        case 3:
            bgpath='https://images.unsplash.com/photo-1542093978-f89a1a42f876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80';
            break;
        case 4:
            bgpath='https://images.unsplash.com/photo-1542227844-5e56c7c2687d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80';
            break;
        case 5:
            bgpath='https://images.unsplash.com/photo-1542704504091-49b394c14bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=333&q=80';
            break;
        case 6:
            bgpath='https://images.unsplash.com/photo-1542042179-ff8ef4a8254f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';
            break;
        case 7:
            bgpath='https://images.unsplash.com/photo-1543443436-bc6deeff2eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80';
            break;
        case 8:
            bgpath='https://images.unsplash.com/photo-1543467573-fd63c26102c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80';
            break;
        case 9:
            bgpath='https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80';
            break;
        case 10:
            bgpath='https://images.unsplash.com/photo-1544044307-d09d2ef95e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';
            break;
        default:
            bgpath='https://images.unsplash.com/photo-1543563274-c4ef3b83a621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80'

    }
    bgimageId.src = bgpath;

}, 1000)