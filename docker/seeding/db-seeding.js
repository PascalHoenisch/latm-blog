db.getCollection("blogs").insertOne({
    author: "Pascal",
    date: "1.9.2023",
    tag: "homeoffice",
    title: {
        en: "Db seeding",
        es: "Db siembra",
        de: "Db sähen",
    },
    description: {
        en: "This article is all about database seeding.",
        es: "Este articulo trata sobre la siembra de bases de datos",
        de: "Dieser Artikel handelt von test Werten fuer die Datenbank",
    },
    content: {
        en: "Db seeding and more text",
        es: "Siembra de base de datos y mas texto",
        de: "Db befüllen und mehr text",
    }
});