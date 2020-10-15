import {menuPral} from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Perimetro rectangulo")
                await rectangulo()
                break
            case 2:
                console.log("Area triangulo")
                let n1: number
                let n2: number
                n1 =  parseInt( await leerTeclado('Dame altura')) 
                n2 =  parseInt( await leerTeclado('Dame base'))
                console.log(`El Area del triangulo es: ${triangulo(n1, n2 / 2)}`)
                break
                case 3:
                    console.log("Perimetro circulo")
                    await circulo()
                    break 


            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
const rectangulo = async () => {
    let n1: number
    let n2: number
    n1 =  parseInt( await leerTeclado('Dame un lado')) 
    n2 =  parseInt( await leerTeclado('Dame otro lado'))
    console.log(`El perimetro es ${n1 * 2 + n2 * 2}`)
}

const triangulo = (n1: number, n2: number): number => n1 * n2 / 2


const circulo = async () => {
    let n1: number
    n1 =  parseInt( await leerTeclado('Dame radio')) 
    console.log(`El radio es ${2 * Math.PI * n1 }`)
}

main()