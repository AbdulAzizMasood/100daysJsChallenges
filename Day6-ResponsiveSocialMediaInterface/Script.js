const menuItems = document.querySelectorAll('.menu-item');
const messageNotification = document.querySelector('#messages-notification')
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-sizes span')
var root = document.querySelector(':root')
const colorPallete = document.querySelectorAll('.choose-color span')
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')
//remove Previous Active Class
const removeActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}
//Add Active Class whenver you click
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active')
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none'
        }
        else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none'
        }
    })
})

//Messages box highlight
messageNotification.addEventListener('click', () => {
    const count = document.querySelector('#messages-notification .notification-count')
    count.style.display = 'none'
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 3000);
})

//Search chat
const searchChat = () => {
    const val = messageSearch.value.toLowerCase()
    // console.log(val)
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        // let name = user.innerHTML.toLowerCase()
        console.log(name)
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex'
        }
        else {
            user.style.display = 'none'
        }
    })
}
//Search for message
messageSearch.addEventListener('keyup', searchChat)

//Work for Customization of theme

const openThemeModal = () => {
    themeModal.style.display = 'grid'
}

//Close Theme Modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none'
    }
}

theme.addEventListener('click', openThemeModal)
themeModal.addEventListener('click', closeThemeModal)

//remove active class from fontsizes
const removeActiveFont = ()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active')
    })
}

//Change Font Sizes
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeActiveFont();
        size.classList.toggle('active')
        let fontSize;
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----stickey-top-left', '5.4rem')
            root.style.setProperty('----stickey-top-right', '5.4rem')
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----stickey-top-left', '5.4rem')
            root.style.setProperty('----stickey-top-right', '-7rem')
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----stickey-top-left', '-2rem')
            root.style.setProperty('----stickey-top-right', '-17rem')
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----stickey-top-left', '-5rem')
            root.style.setProperty('----stickey-top-right', '-25rem')
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----stickey-top-left', '-12rem')
            root.style.setProperty('----stickey-top-right', '-35rem')
        }
        //change html fontsize
        document.querySelector('html').style.fontSize = fontSize;
    })
})
//change Active class on color pallette
const removeColorActive = ()=>{
    colorPallete.forEach(color=>{
        color.classList.remove('active')
    })
}


//Chnage your primary color here
colorPallete.forEach(color=>{
   
    color.addEventListener('click',()=>{
        removeColorActive()
        let primaryHue;
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue',primaryHue)
    })
})

// Theme Background Color
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
//Function to change BG
const changeBg = ()=>{
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

    bg1.addEventListener('click',()=>{
        bg1.classList.add('active');
        darkColorLightness = '17%';
        whiteColorLightness = '100%';
        lightColorLightness = '95%';
        bg2.classList.remove('active')
        bg3.classList.remove('active')
        bg1.style.backgroundColor = 'var(--color-white)';
        bg1.style.color= 'var(--color-dark)'
        // window.location.reload();
        changeBg()
    })

    bg2.addEventListener('click',()=>{
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';
        bg2.classList.add('active');
        bg1.classList.remove('active')
        bg3.classList.remove('active');
        bg1.style.backgroundColor = '#fff';
        bg1.style.color= '#000'
        changeBg();
    })
    bg3.addEventListener('click',()=>{
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';
        bg3.classList.add('active');
        bg1.classList.remove('active')
        bg2.classList.remove('active');
        bg1.style.backgroundColor = '#fff';
        bg1.style.color= '#000'
        changeBg();
    })
























            // arrayFromNodeList.style.display = 'none'
//         }
//     })
// })
// .style.filter = 'blur(5px)'
// const NodeLists = document.getElementsByClassName('btn btn-primary temp');
// const arrayFromNodeList = Array.from(NodeLists);
//       console.log(arrayFromNodeList)
//       arrayFromNodeList.addEventListener('click',()=>{
//         console.log('im clicked')
//       })

// const blurF = ()=>{
//     const but = document.getElementById('temp')
//     but.addEventListener('click',()=>{
//         document.querySelector('.body').style.filter = 'blur(10px)';
//     })
// }

// const btns = document.getElementById('notifications')
// btns.addEventListener('click',()=>{
//     document.querySelector('.body').style.filter = 'blur(10px)';
// })
//DO THIS LATER
// const myfun = ()=>{
//     const btns = document.getElementById('notifications')
//     btns.addEventListener('click',()=>{
//     document.querySelector('.body').style.opacity = '0.3';
//     })
// }
