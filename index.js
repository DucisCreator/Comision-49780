function bienvenido(){
    console.log("Bienvenido al cotizador de smartphones de TechToday, a continuación te haremos preguntas que nos ayuden a aconsejarte.")
}
bienvenido()
const consulta1 = prompt("En primer lugar, ¿qué tamaño de teléfono te gusta o acomoda, a: grande o b: pequeño? (escribe la letra de la opción)").toLowerCase()
const consulta2 = prompt("En segundo lugar, ¿prefieres a: potencia o b: buenas cámaras? (escribe la letra de la opción)").toLowerCase()
const consulta3 = prompt("En tercer lugar, ¿qué rango de precios buscas, a: hasta 300$, b: hasta 700$ o c: más de 700$? (escribe la letra de la opción)").toLowerCase()

const opciones = [
    {
        opcion: "Google Pixel 6a",
        especs1: "b",
        especs2: "b",
        especs3: "a"},
    {
        opcion: "Motorola Edge 30 Neo",
        especs1: "b",
        especs2: "a",
        especs3: "a"},
    {
        opcion: "Redmi Note 13 Pro+",
        especs1: "a",
        especs2: "b",
        especs3: "a"},
    {
        opcion: "Poco F4",
        especs1: "a",
        especs2: "a",
        especs3: "a"},
        {
            opcion: "Xiaomi 12s",
            especs1: "b",
            especs2: "a",
            especs3: "b"},
        {
            opcion: "Google Pixel 7",
            especs1: "b",
            especs2: "b",
            especs3: "b"},
    {
        opcion: "Realme GT Neo 5",
        especs1: "a",
        especs2: "a",
        especs3: "b"},
    {
        opcion: "Nothing Phone 2",
        especs1: "a",
        especs2: "b",
        especs3: "b"},
    {
        opcion: "Asus Zenfone 10",
        especs1: "b",
        especs2: "a",
        especs3: "c"},
    {
        opcion: "Google Pixel 8",
        especs1: "b",
        especs2: "b",
        especs3: "c"},
    {
        opcion: "Honor Magic 5 Pro",
        especs1: "a",
        especs2: "a",
        especs3: "c"},
    {
        opcion: "Oppo Find X6 Pro",
        especs1: "a",
        especs2: "b",
        especs3: "c"}
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
        const cotizador = document.createElement("h1");
        cotizador.innerText = `Te recomendamos el ${sugerencia.opcion}`
        document.body.appendChild(cotizador);
    }else{
        console.log ("Lo Siento, no encontramos una opción para ti")
        const cotizador = document.createElement("h1");
        cotizador.innerText = "Lo Siento, no encontramos una opción para ti";
        document.body.appendChild(cotizador);
    }
}
escoger(consulta1, consulta2, consulta3)
