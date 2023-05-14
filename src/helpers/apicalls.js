import { GET } from "./apimethods"

//  for Test Routes

const GET_TEST_URL = (params) => {
    return GET(process.env.NEXT_PUBLIC_TEST_API);
}

const GET_CATEGORIES = () => {
    return GET(process.env.NEXT_PUBLIC_CATEGORY_API);
}

export {
    GET_TEST_URL,
    GET_CATEGORIES
}