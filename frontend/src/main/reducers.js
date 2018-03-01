import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'

const roortReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
})

export default roortReducer