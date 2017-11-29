import React, { Component} from 'react';

/**
 * The navbar with all its buttons and functionality. Also includes the mobile dropdown
 * @class */
class Navbar extends Component {

    /**@constructor */
    constructor(){
        super();

        /**
         * @type {object} 
         * @property {object} navBtns - # stores boolean to see if btn should.
         * be highlighted or not. 
         * @property {string} name - name of the account holder.
         * @property {boolean} dropdownAnim - should the mobile dropdown expand and animate down.
         * @property {boolean} showProjectBtns - should buttons below Projects be displayed.
         * @property {boolean} showSignoutBtns - should buttons below signout be displayed. */
        this.state = {
            navBtns: {
                home: false,
                about: false,
                projects: false,
                signout: false,
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

                            {/** Once the li is hovered over the dropdown expands more and the correce buttons display*/}
                            <li onMouseEnter={() => this.setState({dropdownAnim: true, showProjectBtns: true})} onMouseLeave={() => this.setState({dropdownAnim: false, showProjectBtns: false})} >
                                <a href="#">projects</a>
                                <ul className={this.state.showProjectBtns === true ? 'project-sub-btns' : 'no-show'}>
                                    <li> <a href="#">Recomendation Engine</a></li>
                                    <li> <a href="#">Sound Recognition</a></li>
                                    <li> <a href="#">Water Filtration</a></li>
                                    <li> <a href="#">Web Crawlers </a></li>
                                </ul>
                            </li>

                            {/** Once the li is hovered over the dropdown expands more and the correce buttons display*/}
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
        if(this.state.navBtns.projects === true){
            return  <nav className="container">
                        <ul className="subnav" onMouseLeave={() => this.setState({navBtns: {projects: false}})}>
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
        if(this.state.navBtns.signout === true) {
            return  <nav className="container">
                        <ul className="accDropdown" onMouseLeave={() => this.setState({navBtns: {signout: false}})}>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Notifications</a></li>
                        </ul>
                    </nav>  
        }
    }

    /**
    * Displays the navbar. The navbar is composed of two different ul because
    * I couldn't get the li to space correctly so I had to split them up. 
    * @function 
    * @return {ReactElement}
    * */
    render() {
        console.log(this.state);
        
        return(
            <div>
            <header className="container site-header">
                <div className="logo">Tinge</div>
                <nav className="container nav">  
                
                    <div className="container mobile-icon" 
                        onMouseEnter={() => this.setState({navBtns: {mobileIcon: true}})}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>

                    <ul className="nav-items">
                        <li className={this.state.navBtns.home === true ? 'active' : ''} 
                            onMouseEnter={() => this.setState({navBtns: {home: true}})}
                            onMouseLeave={() => this.setState({navBtns: {home: false}})}>
                            <a href="#">home</a>
                        </li>
                        <li 
                            className={this.state.navBtns.about === true ? 'active' : ''}
                            onMouseEnter={() => this.setState({navBtns: {about: true}})}
                            onMouseLeave={() => this.setState({navBtns: {about: false}})} >
                            <a href="#">about</a>
                        </li>
                        <li 
                            className={this.state.navBtns.projects === true ? 'active' : ''}
                            onMouseEnter={() => this.setState({navBtns: {projects: true}})} > 
                            <a href="#">projects</a>
                        </li>
                    </ul>

                    {/** This ul is pulled to the right of the page to display the user name and signout button
                         The account actions dropdown below the signout button. */}
                    <ul className='nav-account'>
                        <li className='small-text' onMouseEnter={() => this.setState({navBtns: {signout: false}})}>Hello {this.state.name} </li>
                        <li onMouseEnter={() => this.setState({navBtns: {signout: true}}) }> 
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
