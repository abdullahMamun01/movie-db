import 'server-only'

const dictionaries = {
    en : () => import('./en').then((module) => module.default) ,
    bn: () => import('./bn').then((module) => module.default)
}



export const  getDictionary = async (locale) =>  dictionaries[locale]()

