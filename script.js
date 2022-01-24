const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bg = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
        header.innerHTML = '<img src="https://www.freepsdbazaar.com/wp-content/uploads/2020/06/sky-replace/sun-rise/sunrise-19-freepsdbazaar.jpg" alt="" />'
        title.innerHTML = 'Lorem ipsum dolor sit amet'
        excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. commodi libero.'
        profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
        name.innerHTML = 'John Doe'
        date.innerHTML = 'Oct 08, 2020'
        animated_bg.forEach((bg) => {bg.classList.remove('animated-bg')})
        animated_bg_texts.forEach((bg) => {bg.classList.remove('animated-bg-text')})
}

