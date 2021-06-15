import { openClose, closeAll } from "./gallery_show";
const formWrapper = document.querySelector('.callback__forms');
const ext = document.querySelector('.nextModal__close');
const forms = document.querySelectorAll('.form');
const modal = document.querySelector('.nextModal');
const proBtn = document.querySelector('.provide__btn');
const inputs = document.querySelectorAll('.nextModal__inputs');
const prevBtn = document.querySelector('.preview__btn');
const title = document.querySelector('.nextModal__titles');
const statusMessage = document.createElement("div");
statusMessage.classList.add('status');

const message = {
    success: "Thanks! We will contact you.",
    loading: "Loading...",
    failure: "Fail."
};

function mesStatus(status){
    statusMessage.textContent = status;
    formWrapper.append(statusMessage);
}

function modalStatus(status){
    inputs.forEach(element => {
        element.style.display = 'none';
    });
    title.textContent = status;
}

forms.forEach((element,i) => {
    switch(i){
        case 0:
        postData(element,true,true,'onForm');
        break;
        case 1:
        postData(element,false,false,'alert');
        break;
        case 2:
        postData(element,false,false,'onModal');
        break;
    }
});

function postData(form,invisibleForm,load,promise){
    form.addEventListener('submit',(e) =>{
        e.preventDefault();
    
        if(invisibleForm == true)
            form.style.display = 'none';
        if(load == true){
            mesStatus(message.loading); 
        }

        const formData = new FormData(form);

        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then(() => {
            if(promise == 'onForm'){
                mesStatus(message.success);
            } 
            else if(promise == 'alert'){
                alert(message.success);
            }
            else if(promise == 'onModal'){
                modalStatus(message.success);
            }
        }).catch(() => {
            if(promise == 'onForm'){
                mesStatus(message.fail);
            }
            else if(promise == 'alert'){
                alert(message.fail);
            } 
            else if(promise == 'onModal'){
                modalStatus(message.fail);
            }
        }).finally(() => {
            form.reset();
        });    
    });
}

proBtn.addEventListener('click', () => {
    window.location.href = 'https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0';
});

prevBtn.addEventListener('click',() => {
    openClose(modal,'block','17px','hidden');
});


closeAll(ext,modal);