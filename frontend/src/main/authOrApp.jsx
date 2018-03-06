import '../common/template/dependencies'

import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import App from './app'
import Auth from '../auth/auth'
import { validateToken } from '../auth/authActions'

class AuthOrApp extends Component {
    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {  //se o user existir || token estiver válido
            axios.defaults.headers.common['authorization'] = user.token
            return <App>{this.props.children}</App>  //mostrará o APP
        } else if (!user && !validToken) {
            return <Auth />   //voltará para tela de login
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchtpProps = dispatch => bindActionCreators({ validateToken}, dispatch)
export default connect(mapStateToProps, mapDispatchtpProps)(AuthOrApp)