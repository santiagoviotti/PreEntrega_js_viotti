function ingresarGrupoMuscular() {
    let preguntar = true;
    while (preguntar) {

        let musculo = prompt("Ingresa el grupo muscular: ")
        let muscular = musculo.toLowerCase()

        if (muscular == "pectorales") {
            console.log("Aquí tienes los ejercicios para trabajar tu pectoral: ");
            console.log("Press banca: 12rep - 70%, Apertura con mancuernas: 12rep - 70%, Press inclinado: 12rep - 70%. ")
        } else if (muscular == "espalda") {
            console.log("Aquí tienes los ejercicios para trabajar tu espalda: ");
            console.log("Jalon al pecho: 12rep - 60%, Remo libre: 12rep - 60%, Dorsal con polea: 12rep - 60%. ")
        } else if (muscular == "piernas") {
            console.log("Aquí tienes los ejercicios para trabajar tus piernas: ");
            console.log("Sentadilla: 12rep - 90%, Estocadas: 12rep - 60%, Cuadricep maquina: 12rep - 90%. ")
        } else if (muscular == "brazos") {
            console.log("Aquí tienes los ejercicios para trabajar tus brazos: ");
            console.log("Biceps scott: 12rep - 60%, Biceps polea: 12rep - 60%, triceps polea: 12rep - 60%. ")
        } else {
            console.warn("El grupo muscular es incorrecto, intentar nuevamente.")
        }
        preguntar = confirm("Quieres ingresar otro grupo muscular?")
    }

}