//obtiene diferencia de años

export function obtenerDiferenciaYear(year){
    return new Date().getFullYear()-year;
}

//calcula el total a pagar segun la marca

export function calculaMarca(marca) {
    let incremento;
    switch (marca) {
        case 'americano':
            incremento=1.15;
            break;
        case 'asiatico':
            incremento=1.05;
            break;
        case 'europeo':
            incremento = 1.30;
            break;           
        default:
            break;
    }

    return incremento;
}

//clacula el tipo de seguro

export function obtenerPlan (plan){
    return (plan === 'basico') ? 1.20 : 1.50;
}

//muestar la primer letar mayuscula

export function primerMayuscula (texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}