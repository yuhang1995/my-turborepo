import { useMutation as useReactMutation } from '@tanstack/react-query'

export function useMutation(promise, options) {
    return useReactMutation(promise({}), options)
}
