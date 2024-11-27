//#region Parallax
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
//#endregion

//#region Text

class Text {
    constructor(obj){
        this.text = document.querySelector(obj.text)
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
            }, 100);
        }
    }
}

const text = new Text({
    text: '.header__title'
})
//#endregion

//#region Scroll
class Scroll {
    constructor(obj){
        this.section = document.querySelector(obj.section);
        this.typeFade = document.querySelectorAll(obj.typeFade);
        
        window.addEventListener('scroll', () => {
            this.fadeRightAnim(this.section, 2)
        })
    }
    fadeRightAnim(section, coordinate){
        this.typeFade.forEach(box => {
            const speed = box.dataset.speed
            box.style.transition = speed + 'ms'
            if(window.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)){
                box.classList.add('active')
            }else box.classList.remove('active')
       })
    }
}

const scroll = new Scroll({
    section: '.about',
    typeFade: '.fade-right'
})
const scroll2 = new Scroll({
    section: '.scroll',
    typeFade: '.fade-left'
})
const scroll3 = new Scroll({
    section: '.about2',
    typeFade: '.fade-left'
})
//#endregion

//#region Ball
class ParallaxBall{
    constructor(obj){
        this.balls = document.querySelectorAll(obj.balls);
        
        window.addEventListener('mousemove', (e) => {
            this.moveBalls(e)
        })
    }
    moveBalls(e){
       this.balls.forEach(ball => {
           let speed = ball.dataset.speed
            const X = e.pageX / 50 * speed
            const Y = e.pageY / 100 * speed
        
            ball.style.transform = `translate(${X}px, ${Y}px)`
        })
        
    }
}


const parallaxBall = new ParallaxBall({
    balls: '.parallax__ball'
})

//#endregion

//#region Timer
class Timer {
    constructor(obj) {
        this.timerNums = document.querySelectorAll(obj.timerNums);
        this.section   = document.querySelector(obj.section)
        this.state     = false
        
        window.addEventListener('scroll', () => { this.scrollTimer()})
        
    }
    scrollTimer(){
        if (!this.state) {
            if (window.scrollY >= this.section.offsetTop - this.section.offsetHeight * 2){
                this.timerSet()
                this.state = true
            }
        }
    }
    timerSet(){
        this.timerNums.forEach(num => {
            const count = +num.dataset.num
            num.innerHTML = '0'
            function timer(i = 0) {
                num.innerHTML = i
                i++
                if (i <= count) {
                    setTimeout(() => {
                        timer(i)
                    }, 15);
                }
            }
            timer()
        })
    }
}

const timer = new Timer({
    timerNums: ".timer__num",
    section: ".timer"
})

//#endregion

//#region Bubble
class Bubble {
    constructor(obj){
        this.bubbles = document.querySelectorAll(obj.bubbles);
        
        this.bubbles.forEach(bubble => {
            bubble.addEventListener('mousemove', (e) => {
                this.bubbleShow(e, bubble)
            })
        })
    }
    bubbleShow(e, item){
        const X = e.pageX - item.offsetLeft
        const Y = e.pageY - item.offsetTop
        let span = item.querySelector('span')
        span.style.left = X + 'px'
        span.style.top = Y + 'px'
    }
}

const bubbles = new Bubble({
    bubbles: '.timer__btn'
})




//#endregion