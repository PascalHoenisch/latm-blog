db.getCollection("blogs").insertOne({
    author: "Pascal",
    date: "1.9.2023",
    tag: [
        "homeoffice",
        "development"
    ],
    title: {
        en: "Db seeding",
        es: "Db siembra",
        de: "Db sähen",
    },
    slug: {
        en: "ab-seeding",
        es: "db-siembra",
        de: "db-sähen",
    },
    description: {
        en: "This article is all about database seeding. It shows how to setup a manual workflow with docker/ docker compose and mongo db to add some test data.",
        es: "Este articulo trata sobre la siembra de bases de datos. Muestra cómo configurar " +
            "un flujo de trabajo manual con Docker/Docker Compose y Mongo DB para agregar algunos datos de prueba.",
        de: "Dieser Artikel handelt von test Werten fuer die Datenbank. In diesem Artikel wird gezeigt, wie ein Arbeitsfluss mit Docker/Docker-Compose " +
            "und MongoDb zum hinzufuegen implementiert wird.",
    },
    content: {
        en: "Db seeding and more text. " +
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
        es: "Siembra de base de datos y mas texto" +
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
        de: "Db befüllen und mehr text" +
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
    },
    title_image: {
        path: "/cat.jpg",
        description: {
            en: "a sweet brown cat looking at you",
            es: "una gata mirandote",
            de: "ein süße braune Katze die dich anschaut"
        }
    }
});

db.getCollection("authors").insertOne({
    alt: {
        en: 'john doe looking sweet at you with a hat',
        es: 'John Doe te mira dulcemente y tiene un sombrero puesto.',
        de: 'john doe schaut dich süß an und hat dabei einen hut auf'
    },
    about: {
        en: 'hello I am John doe <br> i like to travel hello I am John doe <br> i like to travel hello I am John doe i like to travel hello I am John doe i like to travel hello I am John doe i like to travel hello I am John doe <br> i like to travel hello I am John doe <br> i like to travel hello I am John doe <br> i like to travel',
        es: 'hola soy john doe, me gusta viajar',
        de: 'hallo ich bin John doe, <br> ich reise gerne'
    },
    imageUri: 'author/nice-image.jpeg',
    name: 'Pascal',
    previewImageUri: 'author/preview/author.png',
    slogan: {
        en: 'english slogan',
        es: 'espańol slogan',
        de: 'deutscher slogan'
    },
    previewImageAlt: {
        en: 'john doe looking sweet at you with a hat only the face',
        es: 'John Doe te mira dulcemente y tiene un sombrero puesto.',
        de: 'john doe schaut dich süß an und hat dabei einen hut auf'
    }
});
