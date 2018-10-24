import { createStore } from 'redux'


const initialState = {
    person:{
        firstname:'',
        lastname:'',
        gender:'',
        haircolor:'',
        eyecolor:'',
        hobby:'',
        birthday:'',
        birthmonth:'',
        birthyear:'',
        image:'',
    }

}


const reducer= (state = initialState, action) => {
    switch(action.type){
       //-----repeat below for each piece of state you are sending to redux
        case 'ADD_LASTNAME':
            var addlastName = action.value
            var newState = {...state, 
                            person: { 
                                ...state.person, lastname: addlastName
                                }
                            }    

            return newState
        //-----repeat above for each piece of state you are sending to redux
        // case "ADD_DESCRIPTION":
        //     var addDescription = action.value
        //     var newState = Object.assign({}, state, {
        //        houses: Object.assign({}, state.houses, {description: addDescription})
        //     })
        //     console.log('newState: ', newState)
        //     return newState
                
            
        case "ADD_FIRSTNAME":
        console.log(action.value)
        var addfirstName = action.value
        var newState = {...state, 
                        person: { 
                            ...state.person, firstname: addfirstName
                            }
                        }    

        return newState

        case "ADD_GENDER":
        var addgender = action.value
        var newState = {...state, 
                        person: { 
                            ...state.person, gender: addgender
                            }
                        }    

        return newState

        case "ADD_HAIRCOLOR":
        var addhairColor = action.value
        var newState = {...state, 
                        person: { 
                            ...state.person, haircolor: addhairColor
                            }
                        }    

        return newState

        case "ADD_EYECOLOR":
        var addeyeColor = action.value
        var newState = {...state, 
                        person: { 
                            ...state.person, eyecolor: addeyeColor
                            }
                        }    

        return newState
        
        case "ADD_HOBBY":
        var addhobby = action.value
        var newState = {...state, 
                        person: { 
                            ...state.person, hobby: addhobby
                            }
                        }    

        return newState

        case "ADD_BIRTHDAY":
        var addbirthDay = action.value
        var newState = {...state, 
                        person: { 
                            ...state.person, birthday: addbirthDay
                            }
                        }    

        return newState

        case "ADD_BIRTHMONTH":
        var addbirthMonth = action.value
        var newState = {...state, 
                        person: { 
                            ...state.person, birthmonth: addbirthMonth
                            }
                        }    

        return newState

        case "ADD_BIRTHYEAR":
        var addbirthYear = action.value
        var newState = {...state, 
                        person: { 
                            ...state.person, birthyear: addbirthYear
                            }
                        }    

        return newState
 
        case "ADD_IMAGE":
        var addimage = action.value
        var newState = {...state, 
                        person: { 
                            ...state.person, image: addimage
                            }
                        }    

        return newState



        
        case "RESET_STATE":
            return {
                person:{
                    firstname:'',
                    lastname:'',
                    gender:'',
                    haircolor:'',
                    eyecolor:'',
                    hobby:'',
                    birthday:'',
                    birthmonth:'',
                    birthyear:'',
                    image:'',
                }
            }

        default:
            return state
    }
}

export default createStore(reducer, initialState)