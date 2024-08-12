const textoOriginal = document.getElementById('texto-original');
const resultado = document.getElementById('resultado');
const encriptarBtn = document.getElementById('encriptar');
const desencriptarBtn = document.getElementById('desencriptar');
const copiarBtn = document.getElementById('copiar');

const   
 diccionario = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat'
};

function encriptar(texto) {
    return texto.replace(/[eioua]/gi, letra => diccionario[letra.toLowerCase()]);
}

function desencriptar(texto) {
    const diccionarioInverso = {
        enter: 'e',
        imes: 'i',
        ai: 'a',
        ober: 'o',
        ufat: 'u'
    };

    // Ordenar las claves del diccionario inverso por longitud descendente
    const clavesOrdenadas = Object.keys(diccionarioInverso).sort((a, b) => b.length - a.length);

    // Limpiar el texto, eliminando caracteres no alfanuméricos y espacios adicionales
    let textoLimpio = texto.replace(/[^a-z\s]/gi, '').trim();

    // Iterar sobre las claves y realizar las sustituciones
    clavesOrdenadas.forEach(clave => {
        textoLimpio = textoLimpio.replace(new RegExp(clave, 'gi'), diccionarioInverso[clave]);
    });

    return textoLimpio;
}

function copiar() {
    resultado.select();
    document.execCommand('copy');
}

encriptarBtn.addEventListener('click', () => {
    const textoEncriptado = encriptar(textoOriginal.value);
    resultado.value = textoEncriptado;
});

desencriptarBtn.addEventListener('click', () => {
    const textoDesencriptado = desencriptar(resultado.value);
    textoOriginal.value = textoDesencriptado;
});

copiarBtn.addEventListener('click', copiar);




