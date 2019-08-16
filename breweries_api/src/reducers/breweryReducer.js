import { 
    FETCH_BREWERY_DATA_START , 
    FETCH_BREWERY_DATA_SUCCESS, 
    FETCH_BREWERY_DATA_ERROR, 
    ADD_TO_FAVORITES, 
    REMOVE_FROM_FAVORITES,
    } from '../actions'

const initialState = {
    breweries: [],
    favorites : [],
    isLoading : false,
    error : '',
    hasBreweries: false,
    fireRedirect : false
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
                hasBreweries : true,
                fireRedirect : true
            }
        case FETCH_BREWERY_DATA_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case ADD_TO_FAVORITES:
            if ( state.favorites.length === 0){
                return{
                    ...state,
                        favorites: [...state.favorites, action.payload]
                }
            } else if (state.favorites.every( favorite => favorite.id !== action.payload.id) !== true){
                alert(`${action.payload.name} is already in your favorites`)
                return state
            } else {
                return {...state,
                        favorites: [...state.favorites, action.payload]
                    }
            }
                
        case REMOVE_FROM_FAVORITES:
                return{
                    ...state,
                    favorites: state.favorites.filter( favorite => favorite.id !== action.payload.id)
                }
        default :
            return state;
    }

}