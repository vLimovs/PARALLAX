class Parallax {
    constructor(obj){
        this.clouds = document.querySelectorAll(obj.clouds);
        this.boat = document.querySelector(obj.boat);
        this.bg = document.querySelector(obj.bg);
        
        window.addEventListener('scroll', () => this.moveElements())
    }
    moveElements(){
        this.clouds.forEach(cloud => {
            let speed = cloud.dataset.speed
            cloud.style.transform = `translateX(${window.scrollY * speed}px)`
        })
        this.boat.style.transform = `translateX(${window.scrollY * 0.9}px)`
        this.bg.style.objectPosition = `0 ${window.scrollY / 8}%`
    }
}

const parallax = new Parallax({
    clouds: ".header__cloud",
    boat: ".header__boat",
    bg: ".header__fantasy",
})


class Text {
    constructor(obj){
        this.text = document.querySelector(obj.text);
        this.fullText = this.text.innerHTML
        this.text.innerHTML = ''
        this.str()
    }
    str(x = 0){
        this.text.innerHTML += this.fullText[x]
        x++
        if(x < this.fullText.length){   
            setTimeout(() => {
                this.str(x)
            }, 200);
        }
    }
}

const text = new Text({
    text: '.header__title'
})

class Scroll {
    constructor(obj){
        this.section = document.querySelector(obj.section);
        
        window.addEventListener('scroll', () => {
            this.fadeRightAnim(this.section, 2)
        })
    }
    fadeRightAnim(section, coordinate){

    const fadeRights = section.querySelectorAll('.fade-right');
    fadeRights.forEach(box => {
        const speed = box.dataset.speed
        box.style.transition = speed + 'ms'
        if (window.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            box.classList.add('active')
        } else {
            box.classList.remove('active')
        }
        })
    }
}

const section = new Scroll({
    section: '.about'
})
const scroll2 = new Scroll({
    section: '.scroll'
})