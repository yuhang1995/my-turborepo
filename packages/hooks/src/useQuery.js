import {
    useQuery as useReactQuery
} from '@tanstack/react-query'

export function useQuery(key, promise, options) {

    return useReactQuery(key, context => promise({}, context), options)
}
