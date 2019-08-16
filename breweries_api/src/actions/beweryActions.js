import axios from 'axios'

export const FETCH_BREWERY_DATA_START = 'FETCH_BREWERY_DATA_START'
export const FETCH_BREWERY_DATA_SUCCESS = 'FETCH_BREWERY_DATA_SUCCESS'
export const FETCH_BREWERY_DATA_ERROR = 'FETCH_BREWERY_DATA_ERROR'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const getData = () => {
    return dispatch => {
        dispatch({ type : FETCH_BREWERY_DATA_START})
        axios   
            .get('https://api.openbrewerydb.org/breweries')
            .then( res => {
                dispatch({type : FETCH_BREWERY_DATA_SUCCESS, payload: res.data})
            })
            .catch( err => {
                dispatch({ type : FETCH_BREWERY_DATA_ERROR, payload : err.response})
            })
    }
}

export const addToFavorites = ( payload ) => {
    return dispatch => {
        dispatch({ type : ADD_TO_FAVORITES, payload : payload})
    }
}

export const removeFromFavorites = payload => {
    return dispatch => {
        dispatch({ type : REMOVE_FROM_FAVORITES, payload : payload})
    }
}