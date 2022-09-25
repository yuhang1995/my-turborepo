import React from 'react'
import { useQuery } from '@vj-feat/hooks'


export const Content = () => {
    const state = useQuery('test', () => {
        return new Promise(res => res(1))
    })

    return (
        <div>{JSON.stringify(state)}</div>
    )
}
