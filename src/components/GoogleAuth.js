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
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get()});

    };

    OnSignInClick = () => {
        this.auth.signIn();
    };
    OnSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton(){
        if ( this.state.isSignedIn === null){
            return null;
        } else if(this.state.isSignedIn){
            return (
                <button onClick={this.OnSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>

            );
                
        } else {
            return (
                <button onClick={this.OnSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
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
