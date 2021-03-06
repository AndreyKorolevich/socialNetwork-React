import Redirect from "react-router-dom/es/Redirect";
import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }
 return connect(mapStateToProps)(RedirectComponent);
}