import { FETCH_BREWERY_DATA_START , FETCH_BREWERY_DATA_SUCCESS, FETCH_BREWERY_DATA_ERROR} from '../actions'

const initialState = {
    breweries: [],
    favorites : [],
    isLoading : false,
    error : '',
    hasBreweries: false
}

export const reducer = (state = initialState , action) => {

    switch(action.type){
        case FETCH_BREWERY_DATA_START:
            return{
                ...state, 
                isLoading: true,
            }
        case FETCH_BREWERY_DATA_SUCCESS:
            return{
                ...state,
                breweries : action.payload,
                hasBreweries : true
            }
        case FETCH_BREWERY_DATA_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default :
            return state;
    }

}