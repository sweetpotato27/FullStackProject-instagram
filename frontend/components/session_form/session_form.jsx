import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import Logo from '/Users/dylpo/Desktop/FullStackProject/Finstagram/app/assets/images/Finstagram_logo.png';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <article className="page-container">
                <div className="page-container-box">
                    <div className="picture-container">
                            <img src={window.images.iphone} alt="iphone" className="iphone"/>
                        <div className="picture-container-picture">
                            <h3>changing picture goes here</h3>
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="form-container-box">
                            <div className="logo-container"><img src={window.images.logo} alt="logo" className="logo"/></div>
                            <form onSubmit={this.handleSubmit} className="form">
                                <h2 className="form-description">Sign up to see fake photos and fake videos from your fake friends.</h2>
                                
                                <div className="submit-button-container">
                                    <input type="submit" value="Demo Login" className="submit-button"/>
                                </div>
                                
                                <div className="form-separator">
                                    <div className="form-separator-decoration"></div>
                                    <div className="form-separator-content">or</div>
                                    <div className="form-separator-decoration"></div>
                                </div>
                                
                                <div className="form-label-container">
                                    <div className="form-label-container-box">
                                        <label className="form-label">
                                            <input 
                                            type="text" 
                                            value={this.state.username} 
                                            onChange={this.update('username')}
                                            className="form-input"
                                            placeholder="Username"
                                            />
                                        </label>
                                    </div>
                                    
                                    <div className="form-label-container-box">
                                        <label className="form-label">
                                            <input 
                                            type="text" 
                                            value={this.state.email} 
                                            onChange={this.update('email')}
                                            className="form-input"
                                            placeholder="Email"
                                            />
                                        </label>
                                    </div>
                                    
                                    <div className="form-label-container-box">
                                        <label className="form-label">
                                            <input 
                                            type="password" 
                                            value={this.state.password} 
                                            onChange={this.update('password')}
                                            className="form-input"
                                            placeholder="Password"
                                            />
                                        </label>
                                    </div>
                                    
                                    <div className="submit-button-container">
                                        <input className="submit-button" type="submit" value={this.props.formType} />
                                    </div>

                                    <div className="errors-container">
                                        {this.renderErrors()}
                                    </div>

                                    <div className="terms-container">
                                        <p>
                                            By signing up, you agree to our list of things you are not going to read.
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="session-link-container">
                            <p className="session-question">Have an account? </p>
                            <Link to="/login" className="session-link">Log in</Link>
                        </div>
                        <div className="download-link-container">
                            <p>Get the app.</p>
                            <div className="download-link-container-box">
                                <a className="download-link" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"><img src={window.images.apple} alt="apple logo" className="download-link-image"/></a>
                                
                                <a className="download-link" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXQ59hQAEAAFKbAmuaEfztY0eCuef%26utm_content%3Dlo%26utm_medium%3Dbadge"><img src={window.images.google} alt="google logo" className="download-link-image"/></a>
                            </div>
                        </div>
                
                    </div>
                    
                </div>
                
            </article>
        );
    }

}

export default withRouter(SessionForm);