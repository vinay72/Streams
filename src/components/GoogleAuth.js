import React, { Component } from 'react';


export class GoogleAuth extends Component {
    state = { isSignedIn: null};
    componentDidMount(){
        window.gapi.load('client: auth2', () =>{
            window.gapi.client.init({
                clientId: '194083509425-v16itlia1sn4vdkrhi1v22b2ndeqoaeg.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get()})
            })
        });
    }
    renderAuthButton(){
        if ( this.state.isSignedIn === null){
            return <div>I don't know if we are Signed In</div>
        } else if(this.state.isSignedIn){
            return <div>
                I am Signed In!
            </div>
        } else {
            return <div>I am not signed in</div>
        }
 
    }
    render() {
        return (
            <div>
                { this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth;
