import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import {apiPosts} from "../features/gettingPosts/api/apiPosts";


export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [apiPosts.reducerPath]: apiPosts.reducer,
    },
    // Adding the apiPosts middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiPosts.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)