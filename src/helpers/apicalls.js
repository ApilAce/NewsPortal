import { GET } from "./apimethods"

//  for Test Routes

const GET_TEST_URL = (params) => {
    return GET(process.env.NEXT_PUBLIC_TEST_API);
}

const GET_CATEGORIES = () => {
    return GET(process.env.NEXT_PUBLIC_CATEGORY_API);
}

const GET_ACTIVE_ARTICLES = () => {
    return GET(process.env.NEXT_PUBLIC_ACTIVE_ARTICLES_API);
}

export {
    GET_TEST_URL,
    GET_CATEGORIES,
    GET_ACTIVE_ARTICLES
}