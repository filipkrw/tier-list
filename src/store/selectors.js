import { useMemo } from 'react'

export function useSelectors(state, mapStateToSelectors) {
  return useMemo(() => mapStateToSelectors(state), [mapStateToSelectors, state])
}

export const mapStateToSelectors = (state) => ({
  getGroup: (group) => state.groups[group],
  allowSelect: () => !state.isSelected,
  isSelectedInGroup: (group) => state.isSelected && state.selected.group === group,
  isSelected: (group, index) => {
    const { isSelected, selected } = state
    return isSelected && selected.group === group && selected.index === index
  },
})
