import axios from 'axios'

export const FETCH_BREWERY_DATA_START = 'FETCH_BREWERY_DATA_START'
export const FETCH_BREWERY_DATA_SUCCESS = 'FETCH_BREWERY_DATA_SUCCESS'

export const getData = () => {

    return dispatch => {
        dispatch({ type : 'FETCH_BREWERY_DATA_START'})
        axios   
            .get('https://api.openbrewerydb.org/breweries')
            .then( res => {
                console.log(res)
                dispatch({type : FETCH_BREWERY_DATA_SUCCESS, payload: res.data})
            })
            .catch( err => {
                console.log(err)
            })
    }

}