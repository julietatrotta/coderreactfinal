const productos = [
    {
        id: 1,
        name: 'Pack de 10 clases',
        img: 'imágenes/imagen1.jpg',
        price: 129.99,
        vacantes: 50,
        categoria: 'Clases'
    },
    {
        id: 2,
        name: 'Pack libre mensual',
        img: 'imágenes/imagen2.jpg',
        price: 139.99,
        vacantes: 55,
        categoria: 'Clases'
    },
    {
        id: 3,
        name: 'Membresía anual',
        img: 'imágenes/imagen3.jpg',
        price: 799.99,
        vacantes: 65,
        categoria: 'Clases'
    },
    {
        id: 4,
        name: 'Curso Mindfulness Design',
        img: 'imágenes/imagen4.jpg',
        price: 179.99,
        vacantes: 40,
        categoria: 'Cursos'
    },
    {
        id: 5,
        name: 'Profundización filosófica',
        img: 'imágenes/imagen5.jpg',
        price: 259.99,
        vacantes: 15,
        categoria: 'Cursos'
    },
    {
        id: 6,
        name: 'Actividades culturales',
        img: 'imágenes/imagen6.jpg',
        price: 19.99,
        vacantes: 30,
        categoria: 'Actividades'
    }
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(producto => producto.id === productId))
        }, 1000)
    })
}

export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(producto => producto.categoria === categoria))
        }, 1000)
    })
}