export const initialState = {
  groups: {
    na: [{}, {}, {}, {}, {}, {}],
    s: [{}, {}], a: [{}], b: [], c: [], d: [], e: [], f: []
  },
  isSelected: false,
  selected: { group: null, index: null }
}

export function reducer(state, action) {
  switch (action.type) {
    case 'SELECT': {
      const {group, index} = action.payload
      if (state.selected.group === group && state.selected.index === index) return state
      return { ...state, isSelected: true, selected: {group, index} }
    }

    case 'DESELECT':
      return { ...state, isSelected: false, selected: {group: null, index: null} }

    case 'TRANSFER': {
      const {groups, selected} = state
      const targetGroup = action.payload.targetGroup

      if (selected.group !== targetGroup) {
        const origin = [...groups[selected.group]]
        const target = [...groups[targetGroup]]

        target.push(origin.splice(selected.index, 1)[0])

        const nextGroups = {
          ...groups,
          [selected.group]: origin,
          [targetGroup]: target
        }

        return { ...state, groups: nextGroups }
      }

      return {...state}
    }

    default:
      throw new Error()
  }
}
