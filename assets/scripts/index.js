window.document.addEventListener('DOMContentLoaded' , function main() { 
    let tg = window.Telegram.WebApp;
    let idUser = tg.initDataUnsafe.user.id;

   let allBase  = 
    [
        vBase = 
        [
            rtx2060 = 
            { 
                src : '../assets/img/151bca6c87d688af46cf02443b0f89cf.png' ,
                name : 'RTX 2060' , 
                price : '160 000' , 
            },
            rtx4060 = 
            { 
                src : '../assets/img/151bca6c87d688af46cf02443b0f89cf.png' ,
                name : 'RTX 4060' , 
                price : '190 000' , 
            },
            amd = 
            { 
                src : '../assets/img/151bca6c87d688af46cf02443b0f89cf.png' ,
                name : 'AMD Radeon RX 7900' , 
                price : '532 000' , 
            }
        ], 
    ]

    

    function addCard()
    { 
        let cardContainer = document.querySelector('.cards');
        vBase.forEach(item => {
                let card = 
                `
                <div class="card">
                    <div class="container"><img src="${item.src}"></div>
                    <h3>${item.name}</h3>
                    <h4>${item.price} тг</h4>
                    <button class="btn">Добавить в корзину достаточно</button>
                </div>
                `
               cardContainer.innerHTML += card ;  

        });
    }
    addCard()
    
    let links = document.querySelectorAll('.links') 
    let navBar = document.querySelector('.nav-bar')
    console.log(navBar)
    let sectionV = document.querySelectorAll('section')
    console.log(sectionV)

    function sectionHide(a) 
    { 
        for( let i = a ; i < sectionV.length ; i++ )
        { 
            sectionV[i].classList.add('hide') ; 
            sectionV[i].classList.remove('show'); 

        }
    }
    function sectionShow(b) 
    { 
        if(sectionV[b].classList.contains('hide'))
        { 
            sectionV[b].classList.remove('hide'); 
            sectionV[b].classList.add('show')
        }
    }
    navBar.addEventListener('click' , function(event) 
    { 
        let click = event.target ; 
        if( click && click.classList.contains('links'))
        { 
            for(let i = 0 ; i < links.length ; i++ )
            { 
                if(click == links[i])
                { 
                    sectionHide(0) 
                    sectionShow(i)
                    break;
                }
            }
        }
        
    });

    let orders = document.querySelector('.buy-list') ; 
    let buyButton = document.querySelectorAll('.btn') ; 
    console.log(buyButton); 
    let cards = document.querySelectorAll('.card');

    
    for (let i = 0; i < buyButton.length; i++) 
    {
        buyButton[i].addEventListener('click', function(event) {
            let click = event.target 
            if(click && click.classList.contains('btn'))
            {   
                const clonedCard = cards[i].cloneNode(true);
                clonedCard.classList.remove('card')
                clonedCard.classList.add('buy-card')
                orders.appendChild(clonedCard)

                
            }
       });
    }
    
    function sendCartToTelegram() {
    const botToken = '6722686062:AAEjO0wEnBC1JJCalkuEEId5a6b3LJJ6yyk';
    const chatId = idUser;
    
    
    if (!chatId) {
        console.error('Chat ID not available.');
        return;
    }

    const message = buildCartMessage();

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Cart sent to Telegram:', data);
    })
    .catch(error => {
        console.error('Error sending cart to Telegram:', error);
    });
}

function buildCartMessage() {
    let message = 'Содержимое корзины:\n';

    order-list.forEach(item => {
        message += `${item.product} - $${item.price}\n`;
    });

    message += `Итого: $${cartTotal}`;

    return message;
}
    
function updateCartUI() {
    const cartItemsElement = document.getElementById('');
    const cartTotalElement = document.getElementById('');

    // Очищаем корзину перед обновлением
    cartItemsElement.innerHTML = '';

    // Обновляем отображение корзины
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartItemsElement.appendChild(li);
    });

    // Обновляем общую стоимость
    cartTotalElement.textContent = cartTotal;
}
    

}); 