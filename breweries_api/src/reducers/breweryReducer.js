import { FETCH_BREWERY_DATA_START , FETCH_BREWERY_DATA_SUCCESS} from '../actions'

const initialState = {
    breweries: [],
    favorites : [],
    isLoading : false,
    error : ''
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
                breweries : action.payload
            }
        default :
            return state;
    }

}