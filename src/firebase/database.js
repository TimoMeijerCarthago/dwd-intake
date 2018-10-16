import { db } from './firebase'

export const createAccountInfo = (id, email, firstName, lastName, company, country, postalCode, number) =>
    db.ref(`accounts/${id}`).set({
        email,
        firstName,
        lastName,
        company,
        country,
        postalCode,
        number
    })

export const readAccountInfo = (id) => {
    return db.ref(`accounts/${id}`).once('value')
}
