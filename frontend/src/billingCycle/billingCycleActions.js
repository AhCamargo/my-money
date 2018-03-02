import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:1991/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
     return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : '' 
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
         .then(resp =>{
             toastr.success('Sucesso', 'Operação Realizada com sucesso.')
             dispatch(init())
         })
         .catch(e => {
             e.response.data.errors.forEach(error => toastr.error('Erro', error))
             
         })

    }

}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

// Sempre que eu sair do cadastro e voltar, quero que as funcoes estejam ativas
export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(), //pega a lista atualizada
        initialize('billingCycleForm', INITIAL_VALUES) // inicializa com os valores iniciais
    ]
}