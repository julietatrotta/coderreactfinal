const productos = [
    {
        id: "1",
        name: 'Pack de 10 clases',
        img: '/img/clasefuerza.jpg',
        price: 129.99,
        vacantes: 60,
        categoria: "Clases",
        description: "Diez clases prácticas de técnicas para utilizar en 120 días."
    },
    {
        id: "2",
        name: 'Pack libre mensual',
        img: '/img/clasegrupotripad.jpg',
        price: 139.99,
        vacantes: 75,
        categoria: "Clases",
        description: "Acceso ilimitado a nuestras prácticas durante un mes y cursos teóricos para alumnos."
    },
    {
        id: "3",
        name: 'Membresía anual',
        img: '/img/kakasanacorreccion.jpg',
        price: 799.99,
        vacantes: 85,
        categoria: "Clases",
        description: "Acceso por un año a nuestra escuela, clases, cursos, espacio de cowork y mucho más."
    },
    {
        id: "4",
        name: 'Curso Mindfulness Design',
        img: '/img/curso.jpg',
        price: 179.99,
        vacantes: 40,
        categoria: 'Cursos',
        description: "Workshops para potencias tus soft skills, tu inteligencia emocional, liderazgo, cumplimiento de metas y objetivos, herramientas aplicables a la vida cotidiana tanto laboral como personal. Segumiento personalizado."
    },
    {
        id: "5",
        name: 'Profundización filosófica',
        img: '/img/practicameditacion.jpg',
        price: 559.99,
        vacantes: 15,
        categoria: 'Cursos',
        description: "Aprende más sobre nuestra filosofía, profundiza tu conocimiento sobre nuestra práctica."
    },
    {
        id: "6",
        name: 'Cena Gourmet',
        img: '/img/cocinando3.jpg',
        price: 19.99,
        vacantes: 20,
        categoria: 'Actividades',
        description: "Aprende a cocinar delicioso, saludable y rodeado de personas increíbles :)"
    },
    {
        id: "7",
        name: 'Retreats',
        img: '/img/retreat.jpg',
        price: 299.99,
        vacantes: 25,
        categoria: 'Actividades',
        description: "Tres días para recargar energías, comer bien, estar en contacto con la naturaleza y con personas maravillosas, y pasarla bien!"
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(producto => producto.id === id))
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