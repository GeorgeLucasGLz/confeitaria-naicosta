function scrollToElement(elementSelector, instance = 0) {

    const elements = document.querySelectorAll(elementSelector)

    if (elements.length > instance) {

        elements[instance].scrollIntoView({ behavior: "smooth" })

    } else {
        return
    }

}

const navInicio = document.getElementById('nav-inicio')
const navProdutos = document.getElementById('nav-produtos')
const navSobre = document.getElementById('nav-sobre')
const navCarrinho = document.getElementById('nav-carrinho')


navInicio.addEventListener('click', (event) => {

    event.preventDefault()
    scrollToElement('header')
})

navProdutos.addEventListener('click', (event) => {

    event.preventDefault()
    scrollToElement('.servicos')
})

navSobre.addEventListener('click', (event) => {

    event.preventDefault()
    scrollToElement('.customer-reviews')
})

navCarrinho.addEventListener('click', (event) => {

    event.preventDefault()
    scrollToElement('.mini-cart')
})

const btn = document.querySelector('#contact')

btn.addEventListener('click', (event) => {

    event.preventDefault()
    window.open('https://api.whatsapp.com/send?phone=5500111112222')
})