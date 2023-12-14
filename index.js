function bienvenido(){
    console.log("Bienvenido al cotizador de smartphones de TechToday, a continuación te haremos preguntas que nos ayuden a aconsejarte.")
}
bienvenido()
const consulta1 = prompt("En primer lugar, ¿qué tamaño de teléfono te gusta o acomoda, a: grande o b: pequeño? (escribe la letra de la opción)").toLowerCase()
localStorage.setItem("tamaño", consulta1)
const consulta2 = prompt("En segundo lugar, ¿prefieres a: potencia o b: buenas cámaras? (escribe la letra de la opción)").toLowerCase()
localStorage.setItem("preferencia", consulta2)
const consulta3 = prompt("En tercer lugar, ¿qué rango de precios buscas, a: hasta 300$, b: hasta 700$ o c: más de 700$? (escribe la letra de la opción)").toLowerCase()
localStorage.setItem("precio", consulta3)

const opciones = [
    {
        opcion: "Google Pixel 6a",
        imagen: "https://m-cdn.phonearena.com/images/review/5269-wide-two_1200/Google-Pixel-6-review-best-features.jpg",
        especs1: "b",
        especs2: "b",
        especs3: "a"},
    {
        opcion: "Motorola Edge 30 Neo",
        imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/10/motorola-edge-30-neo-2833061.jpg",
        especs1: "b",
        especs2: "a",
        especs3: "a"},
    {
        opcion: "Redmi Note 13 Pro+",
        imagen: "https://images.frandroid.com/wp-content/uploads/2023/09/redmi-note-13-pro-plus.jpg",
        especs1: "a",
        especs2: "b",
        especs3: "a"},
    {
        opcion: "Poco F4",
        imagen: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-poco-f4-5g-02.jpg",
        especs1: "a",
        especs2: "a",
        especs3: "a"},
        {
            opcion: "Xiaomi 12s",
            imagen: "https://i.blogs.es/11faff/xiaomi-12s-pro-lanzamiento-precio-caracteristicas-especificaciones-ficha-tecnica/1366_2000.jpeg",
            especs1: "b",
            especs2: "a",
            especs3: "b"},
        {
            opcion: "Google Pixel 7",
            imagen: "https://www.lavanguardia.com/andro4all/hero/2022/10/Google-Pixel-7-parte-trasera.jpg?width=1200&aspect_ratio=16:9",
            especs1: "b",
            especs2: "b",
            especs3: "b"},
    {
        opcion: "Realme GT Neo 5",
        imagen: "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/realmegtneo5teaser16.jpg",
        especs1: "a",
        especs2: "a",
        especs3: "b"},
    {
        opcion: "Nothing Phone 2",
        imagen: "https://media.es.wired.com/photos/64adeb362ffab1a554bf9531/master/w_1600%2Cc_limit/nothing%2520phone%25202%25203.jpg",
        especs1: "a",
        especs2: "b",
        especs3: "b"},
    {
        opcion: "Asus Zenfone 10",
        imagen: "https://static3.pisapapeles.net/uploads/2023/06/Asus-Zenfone-10-leaks.png",
        especs1: "b",
        especs2: "a",
        especs3: "c"},
    {
        opcion: "Google Pixel 8",
        imagen: "https://www.zonamovilidad.es/fotos/2/30871_pxl-8.jpg",
        especs1: "b",
        especs2: "b",
        especs3: "c"},
    {
        opcion: "Honor Magic 5 Pro",
        imagen: "https://tecinformamos.com/wp-content/uploads/2023/03/HONOR-Magic-5-Pro-DXOMARK-Peru.webp",
        especs1: "a",
        especs2: "a",
        especs3: "c"},
    {
        opcion: "Oppo Find X6 Pro",
        imagen: "https://i.blogs.es/ee4d9e/oppofindx6pro/1366_2000.jpeg",
        especs1: "a",
        especs2: "b",
        especs3: "c"}
]
const cadenaJSON = JSON.stringify (opciones)
localStorage.setItem ("opciones", cadenaJSON)

function escoger(){
    const respuesta1 = localStorage.getItem("tamaño")
    const respuesta2 = localStorage.getItem("preferencia")
    const respuesta3 = localStorage.getItem("precio")
    const cadenaJSON = localStorage.getItem ("opciones")
    const opciones = JSON.parse (cadenaJSON)
    const sugerencia = opciones.find((telefono) => {
        return (
            telefono.especs1 === respuesta1 
            && telefono.especs2 === respuesta2
            && telefono.especs3 === respuesta3
        )
    })
    if (sugerencia) {
        console.log (`Te recomendamos el ${sugerencia.opcion}`)
        const cotizador = document.createElement("h1")
        cotizador.innerText = `Te recomendamos el ${sugerencia.opcion}`
        document.body.appendChild(cotizador)
        const imagen = document.createElement("img")
        imagen.src = sugerencia.imagen
        document.body.appendChild(imagen)
    }else{
        console.log ("Lo Siento, no encontramos una opción para ti")
        const cotizador = document.createElement("h1")
        cotizador.innerText = "Lo Siento, no encontramos una opción para ti"
        document.body.appendChild(cotizador)
    }
    localStorage.clear()
}
escoger()
