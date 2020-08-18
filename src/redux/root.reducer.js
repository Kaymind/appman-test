import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import pokedexReducer from "./pokedex/pokedex.reducer"
import uiReducer from "./ui/ui.reducer"

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['pokedex']
}

const rootReducer = combineReducers({
  pokedex: pokedexReducer,
  ui: uiReducer
})

export default persistReducer(persistConfig, rootReducer)
