function bienvenido(){
    console.log("Bienvenido al cotizador de smartphones de TechToday")
}
bienvenido()
const consulta1 = prompt("¿Qué tamaño de teléfono te gusta o acomoda, grande o pequeño?")
const consulta2 = prompt("¿Prefieres potencia o te importa más unas buenas cámaras?")
const consulta3 = prompt("¿Qué rango de precios buscas, hasta 300$, hasta 700$ o desde 700$?")

const opciones = [
    {
        opcion: "Google Pixel 6a",
        especs1: "pequeño",
        especs2: "cámaras",
        especs3: "hasta 300$"},
    {
        opcion: "Motorola Edge 30 Neo",
        especs1: "pequeño",
        especs2: "potencia",
        especs3: "hasta 300$"},
    {
        opcion: "Redmi Note 13 Pro+",
        especs1: "grande",
        especs2: "cámaras",
        especs3: "hasta 300$"},
    {
        opcion: "Poco F4",
        especs1: "grande",
        especs2: "potencia",
        especs3: "hasta 300$"},
        {
            opcion: "Xiaomi 12s",
            especs1: "pequeño",
            especs2: "potencia",
            especs3: "hasta 700$"},
        {
            opcion: "Google Pixel 7",
            especs1: "pequeño",
            especs2: "cámaras",
            especs3: "hasta 700$"},
    {
        opcion: "Realme GT Neo 5",
        especs1: "grande",
        especs2: "potencia",
        especs3: "hasta 700$"},
    {
        opcion: "Nothing Phone 2",
        especs1: "grande",
        especs2: "cámaras",
        especs3: "hasta 700$"},
    {
        opcion: "Asus Zenfone 10",
        especs1: "pequeño",
        especs2: "potencia",
        especs3: "desde 700$"},
    {
        opcion: "Google Pixel 8",
        especs1: "pequeño",
        especs2: "cámaras",
        especs3: "más de 700$"},
    {
        opcion: "Honor Magic 5 Pro",
        especs1: "grande",
        especs2: "potencia",
        especs3: "desde 700$"},
    {
        opcion: "Oppo Find X6 Pro",
        especs1: "grande",
        especs2: "cámaras",
        especs3: "desde 700$"}
]

function escoger(respuesta1, respuesta2, respuesta3){
    const sugerencia = opciones.find((telefono) => {
        return (
            telefono.especs1 === respuesta1 
            && telefono.especs2 === respuesta2
            && telefono.especs3 === respuesta3
        )
    })
    if (sugerencia) {
        console.log (`Te recomendamos el ${sugerencia.opcion}`)
    }else{
        console.log ("Lo Siento, no encontramos una opción para ti")
    }
}
escoger(consulta1, consulta2, consulta3)
