import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
console.log(process.env.REACT_APP_RAPID)
export const apiFootBall = createApi({
    reducerPath: 'apiFootBall',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api-football-v1.p.rapidapi.com/v3',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', `c735dba039msh966a299e7017b9fp17ed06jsn28c008b6b82c`)
        return headers
    },
    }),

    endpoints: (builder) => ({
        getPlayerStatisticsByTeamId: builder.query({ query: () => '/players?team=33&season=2020'}),
    })
})

console.log(process.env.REACT_APP_RAPID);
export const{
    useGetPlayerStatisticsByTeamIdQuery,
} = apiFootBall;