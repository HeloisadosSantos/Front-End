
// criar a variável 
let modalKey = 0

// variavel para controlar a quantidade inicial 
let quanttenis = 1

let cart = [] // carrinho

// funcoes
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const formatoMonetario = (valor) => {
    if(valor) {
        return valor.toFixed(2)
    }
}

const abrirModal = () => {
    seleciona('.tenisWindowArea').style.opacity = 0 // transparente
    seleciona('.tenisWindowArea').style.display = 'flex'
    setTimeout(() => seleciona('.tenisWindowArea').style.opacity = 1, 150)
}

const fecharModal = () => {
    seleciona('.tenisWindowArea').style.opacity = 0 // transparente
    setTimeout(() => seleciona('.tenisWindowArea').style.display = 'none', 500)
}

const botoesFechar = () => {
    // BOTOES FECHAR MODAL
    selecionaTodos('.tenisInfo--cancelButton, .tenisInfo--cancelMobileButton').forEach( (item) => item.addEventListener('click', fecharModal) )
}

const preencheDadosDastenis = (tenisItem, item, index) => {
    // setar um atributo para identificar qual elemento foi clicado
	tenisItem.setAttribute('data-key', index)
    tenisItem.querySelector('.tenis-item--img img').src = item.img
    tenisItem.querySelector('.tenis-item--price').innerHTML = formatoReal(item.price[2])
    tenisItem.querySelector('.tenis-item--name').innerHTML = item.name
    tenisItem.querySelector('.tenis-item--desc').innerHTML = item.description
}

const preencheDadosModal = (item) => {
    seleciona('.tenisBig img').src = item.img
    seleciona('.tenisInfo h1').innerHTML = item.name
    seleciona('.tenisInfo--desc').innerHTML = item.description
    seleciona('.tenisInfo--actualPrice').innerHTML = formatoReal(item.price[2])
}


const pegarKey = (e) => {
    
    let key = e.target.closest('.tenis-item').getAttribute('data-key')
    console.log('tenis clicada ' + key)
    console.log(tenisJson[key])

    // garantir que a quantidade inicial de tenis é 1
    quanttenis = 1

    // Para manter a informação de qual tenis foi clicada
    modalKey = key

    return key
}

const preencherTamanhos = (key) => {
    // tirar a selecao de tamanho atual e selecionar o tamanho grande
    seleciona('.tenisInfo--size.selected').classList.remove('selected')

    // selecionar todos os tamanhos
    selecionaTodos('.tenisInfo--size').forEach((size, sizeIndex) => {
        // selecionar o tamanho grande
        (sizeIndex == 2) ? size.classList.add('selected') : ''
        size.querySelector('span').innerHTML = tenisJson[key].sizes[sizeIndex]
    })
}

const escolherTamanhoPreco = (key) => {
    // Ações nos botões de tamanho
    // selecionar todos os tamanhos
    selecionaTodos('.tenisInfo--size').forEach((size, sizeIndex) => {
        size.addEventListener('click', (e) => {
            // clicou em um item, tirar a selecao dos outros e marca o q vc clicou
            // tirar a selecao de tamanho atual e selecionar o tamanho grande
            seleciona('.tenisInfo--size.selected').classList.remove('selected')
            // marcar o que vc clicou, ao inves de usar e.target use size, pois ele é nosso item dentro do loop
            size.classList.add('selected')

            // mudar o preço de acordo com o tamanho
            seleciona('.tenisInfo--actualPrice').innerHTML = formatoReal(tenisJson[key].price[sizeIndex])
        })
    })
}

const mudarQuantidade = () => {
    // Ações nos botões + e - da janela modal
    seleciona('.tenisInfo--qtmais').addEventListener('click', () => {
        quanttenis++
        seleciona('.tenisInfo--qt').innerHTML = quanttenis
    })

    seleciona('.tenisInfo--qtmenos').addEventListener('click', () => {
        if(quanttenis > 1) {
            quanttenis--
            seleciona('.tenisInfo--qt').innerHTML = quanttenis	
        }
    })
}

const adicionarNoCarrinho = () => {
    seleciona('.tenisInfo--addButton').addEventListener('click', () => {
        console.log('Adicionar no carrinho')

        // pegar dados da janela modal atual
    	// qual tenis? pegue o modalKey para usar tenisJson[modalKey]
    	console.log("tenis " + modalKey)
    	// tamanho
	    let size = seleciona('.tenisInfo--size.selected').getAttribute('data-key')
	    console.log("Tamanho " + size)
	    // quantidade
    	console.log("Quant. " + quanttenis)
        // preco
        let price = seleciona('.tenisInfo--actualPrice').innerHTML.replace('R$&nbsp;', '')
    
        // crie um identificador que junte id e tamanho
	    // concatene as duas informacoes separadas por um símbolo, vc escolhe
	    let identificador = tenisJson[modalKey].id+'t'+size

        // antes de adicionar verifique se ja tem aquele codigo e tamanho
        // para adicionarmos a quantidade
        let key = cart.findIndex( (item) => item.identificador == identificador )
        console.log(key)

        if(key > -1) {
            // se encontrar aumente a quantidade
            cart[key].qt += quanttenis
        } else {
            // adicionar objeto tenis no carrinho
            let tenis = {
                identificador,
                id: tenisJson[modalKey].id,
                size, // size: size
                qt: quanttenis,
                price: parseFloat(price) // price: price
            }
            cart.push(tenis)
            console.log(tenis)
            console.log('Sub total R$ ' + (tenis.qt * tenis.price).toFixed(2))
        }

        fecharModal()
        abrirCarrinho()
        atualizarCarrinho()
    })
}

const abrirCarrinho = () => {
    console.log('Qtd de itens no carrinho ' + cart.length)
    if(cart.length > 0) {
        // mostrar o carrinho
	    seleciona('aside').classList.add('show')
        seleciona('header').style.display = 'flex' // mostrar barra superior
    }

    // exibir aside do carrinho no modo mobile
    seleciona('.menu-openner').addEventListener('click', () => {
        if(cart.length > 0) {
            seleciona('aside').classList.add('show')
            seleciona('aside').style.left = '0'
        }
    })
}

const fecharCarrinho = () => {
    // fechar o carrinho com o botão X no modo mobile
    seleciona('.menu-closer').addEventListener('click', () => {
        seleciona('aside').style.left = '100vw' // usando 100vw ele ficara fora da tela
        seleciona('header').style.display = 'flex'
    })
}

const atualizarCarrinho = () => {
    // exibir número de itens no carrinho
	seleciona('.menu-openner span').innerHTML = cart.length
	
	// mostrar ou nao o carrinho
	if(cart.length > 0) {

		// mostrar o carrinho
		seleciona('aside').classList.add('show')

		// zerar meu .cart para nao fazer insercoes duplicadas
		seleciona('.cart').innerHTML = ''

        // crie as variaveis antes do for
		let subtotal = 0
		let desconto = 0
		let total    = 0

        // para preencher os itens do carrinho, calcular subtotal
		for(let i in cart) {
			// use o find para pegar o item por id
			let tenisItem = tenisJson.find( (item) => item.id == cart[i].id )
			console.log(tenisItem)

            // em cada item pegar o subtotal
        	subtotal += cart[i].price * cart[i].qt
            //console.log(cart[i].price)

			// fazer o clone, exibir na telas e depois preencher as informacoes
			let cartItem = seleciona('.models .cart--item').cloneNode(true)
			seleciona('.cart').append(cartItem)

			let tenisSizeName = cart[i].size

			let tenisName = `${tenisItem.name} (${tenisSizeName})`

			// preencher as informacoes
			cartItem.querySelector('img').src = tenisItem.img
			cartItem.querySelector('.cart--item-nome').innerHTML = tenisName
			cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt

			// selecionar botoes + e -
			cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
				console.log('Clicou no botão mais')
				// adicionar apenas a quantidade que esta neste contexto
				cart[i].qt++
				// atualizar a quantidade
				atualizarCarrinho()
			})

			cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
				console.log('Clicou no botão menos')
				if(cart[i].qt > 1) {
					// subtrair apenas a quantidade que esta neste contexto
					cart[i].qt--
				} else {
					// remover se for zero
					cart.splice(i, 1)
				}

                (cart.length < 1) ? seleciona('header').style.display = 'flex' : ''

				// atualizar a quantidade
				atualizarCarrinho()
			})

			seleciona('.cart').append(cartItem)

		} 
		// calcule desconto 10% e total
		//desconto = subtotal * 0.1
		desconto = subtotal * 0
		total = subtotal - desconto

		// exibir na tela os resultados
		// selecionar o ultimo span do elemento
		seleciona('.subtotal span:last-child').innerHTML = formatoReal(subtotal)
		seleciona('.desconto span:last-child').innerHTML = formatoReal(desconto)
		seleciona('.total span:last-child').innerHTML    = formatoReal(total)

	} else {
		// ocultar o carrinho
		seleciona('aside').classList.remove('show')
		seleciona('aside').style.left = '100vw'
	}
}

const finalizarCompra = () => {
    seleciona('.cart--finalizar').addEventListener('click', () => {
        console.log('Finalizar compra')
        seleciona('aside').classList.remove('show')
        seleciona('aside').style.left = '100vw'
        seleciona('header').style.display = 'flex'
    })
}


// MAPEAR tenisJson para gerar lista de tenis
tenisJson.map((item, index ) => {
    //console.log(item)
    let tenisItem = document.querySelector('.models .tenis-item').cloneNode(true)
    //console.log(tenisItem)
    //document.querySelector('.tenis-area').append(tenisItem)
    seleciona('.tenis-area').append(tenisItem)

    // preencher os dados de cada tenis
    preencheDadosDastenis(tenisItem, item, index)
    
    // tenis clicada
    tenisItem.querySelector('.tenis-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Clicou na tenis')

        
        let chave = pegarKey(e)
        

        // abrir janela modal
        abrirModal()

        // preenchimento dos dados
        preencheDadosModal(item)

        
        // pegar tamanho selecionado
        preencherTamanhos(chave)

		// definir quantidade inicial como 1
		seleciona('.tenisInfo--qt').innerHTML = quanttenis

        // selecionar o tamanho e preco com o clique no botao
        escolherTamanhoPreco(chave)
       
    })

    botoesFechar()

}) // fim do MAPEAR tenisJson para gerar lista de tenis


// mudar quantidade com os botoes + e -
mudarQuantidade()



adicionarNoCarrinho()
atualizarCarrinho()
fecharCarrinho()
finalizarCompra()


