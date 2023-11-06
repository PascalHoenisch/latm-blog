import db from '$db/mongo'

export const blogs = db.collection('blogs')
export const authors = db.collection('authors')
