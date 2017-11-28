import React, { Component} from 'react';

/**
 * The navbar with all its buttons and functionality
 * @class */
class Navbar extends Component {

    /**@constructor */
    constructor(){
        super();

        /**
         * @type {object} 
         * @property {object} navBtns - # stores boolean to see if btn should 
         * be highlighted or not. 
         * @property {string} name - name of the account holder*/
        this.state = {
            navBtns: {
                btn1: false,
                btn2: false,
                btn3: false,
                btn4: false,
                mobileIcon: false
            }, 
            name: 'Dave',
            dropdownAnim: false,    
            showProjectBtns: false,
            showSignoutBtns: false
        }
    }

    /**
     * 
     * display the mobile dropdown menu
     * @function
     * @return {<div>} - Div with a <ul> with all the options
     */
    displayMobileDropdown = () => {
        /** Display the mobile-dropdown if the icon is hovered over */
        if(this.state.navBtns.mobileIcon === true) {
            return <nav >
                        {/** If an li that has sub buttons is hovered over the mobile-dropdown grows to account for the extra buttons */}
                        <ul className={this.state.dropdownAnim === true ? 'mobile-dropdown animation' : 'mobile-dropdown'} 
                            onMouseLeave={() => this.setState({navBtns: {mobileIcon: false}})} >

                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>

                            <li onMouseEnter={() => this.setState({dropdownAnim: true, showProjectBtns: true})} onMouseLeave={() => this.setState({dropdownAnim: false, showProjectBtns: false})} >
                                <a href="#">projects</a>
                                <ul className={this.state.showProjectBtns === true ? 'project-sub-btns' : 'no-show'}>
                                    <li> <a href="#">Recomendation Engine</a></li>
                                    <li> <a href="#">Sound Recognition</a></li>
                                    <li> <a href="#">Water Filtration</a></li>
                                    <li> <a href="#">Web Crawlers </a></li>
                                </ul>
                            </li>

                            <li className={this.state.showProjectBtns === true ? 'move-signout-btn' : ''}
                                onMouseEnter={() => this.setState({dropdownAnim: true, showSignoutBtns: true})} onMouseLeave={() => this.setState({dropdownAnim: false, showSignoutBtns: false})}> 
                                <a href='#'>Signout</a> 
                                <ul className={this.state.showSignoutBtns === true ? 'signout-sub-btns' : 'no-show'}>
                                    <li><a href="#">Settings</a></li>
                                    <li><a href="#">Contacts</a></li>
                                    <li><a href="#">Notifications</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
        }
    }

    /**
     * Display the different Products below the navbar when Products btn is hovered over.
     * @function
     * @return {<div>} - Div with a <ul> with all the products 
     */
    displaySubNav = () => {
        if(this.state.navBtns.btn3 === true){
            return  <nav className="container">
                        <ul className="subnav" onMouseLeave={() => this.setState({navBtns: {btn3: false}})}>
                            <li> <a href="#">Recomendation Engine</a></li>
                            <li> <a href="#">Sound Recognition</a></li>
                            <li> <a href="#">Water Filtration</a></li>
                            <li> <a href="#">Web Crawlers </a></li>
                        </ul>
                    </nav>
        } 
    }

    /**
     * Displays the account btns if signout is hovered over
     * @function
     * @return {<div>} - div with all the account btn's 
     */
    displayAccountNav = () => {
    
        if(this.state.navBtns.btn4 === true) {
            return  <nav className="container">
                        <ul className="accDropdown" onMouseLeave={() => this.setState({navBtns: {btn4: false}})}>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Notifications</a></li>
                        </ul>
                    </nav>  
        }
    }

    /**
    * Displays our app
    * @function 
    * @return {ReactElement}
    * */
    render() {
        console.log(this.state);
        
        return(
            <div>
            <header className="container content-header">
                <div className="logo">Tinge</div>
                <nav className="container nav">  
                
                    <div className="container mobile-icon" 
                        onMouseEnter={() => this.setState({navBtns: {mobileIcon: true}})}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>

                    <ul className="nav-items">
                        <li className={this.state.navBtns.btn1 === true ? 'active' : ''} 
                            onMouseEnter={() => this.setState({navBtns: {btn1: true}})}
                            onMouseLeave={() => this.setState({navBtns: {btn1: false}})}>
                            <a href="#">home</a>
                        </li>
                        <li 
                            className={this.state.navBtns.btn2 === true ? 'active' : ''}
                            onMouseEnter={() => this.setState({navBtns: {btn2: true}})}
                            onMouseLeave={() => this.setState({navBtns: {btn2: false}})} >
                            <a href="#">about</a>
                        </li>
                        <li 
                            className={this.state.navBtns.btn3 === true ? 'active' : ''}
                            onMouseEnter={() => this.setState({navBtns: {btn3: true}})} > 
                            <a href="#">projects</a>
                        </li>
                    </ul>

                    <ul className='nav-account'>
                        <li className='small-text' onMouseEnter={() => this.setState({navBtns: {btn4: false}})}>Hello {this.state.name} </li>
                        <li onMouseEnter={() => this.setState({navBtns: {btn4: true}}) }> 
                            <a href='#'>Signout</a> 
                        </li>
                    </ul>
                </nav>
            </header>

            { this.displaySubNav() }
            { this.displayAccountNav() }
            { this.displayMobileDropdown() }
            </div>
        )
    }
}

export default Navbar;
