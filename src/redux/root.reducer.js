import { combineReducers } from "redux"
import pokedexReducer from "./pokedex/pokedex.reducer"
import uiReducer from "./ui/ui.reducer"

export default combineReducers({
  pokedex: pokedexReducer,
  ui: uiReducer
})
