export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

//operador rest, juntar diversos parametros que vc passou na chamado do metodos
export function showTabs(...tabIds) {
   const tabsToShow = {}
   tabIds.forEach(e => tabsToShow[e] = true)
   return {
       type: 'TAB_SHOWED',
       payload: tabsToShow
   }
}