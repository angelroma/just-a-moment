import { LOAD_DATA } from './load.action';

const initialState = []

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return [
        ...state,
        {
          data: action.data
        }
      ]
  }
}

export default loadReducer
