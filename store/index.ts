import { GetterTree, ActionTree, MutationTree } from 'vuex'

// export const state = () => ({
//   things: [] as string[],
//   name: 'Me',
// })

export const state = () => ({
  route_index: 0
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  route_index: state => state.route_index
}

export const mutations: MutationTree<RootState> = {
  CHANGE_ROUTE_INDEX: (state, newIndex: number) => ( state.route_index = newIndex ),
}