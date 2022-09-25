import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { Content } from './test'

const queryClient = new QueryClient()

export default function Web() {
    const [state, setState] = useState('state')

    return (

        <QueryClientProvider client={queryClient}>
            <div>
                <h1>Web {state}</h1>
                <Content />
            </div>
        </QueryClientProvider>
    );
}