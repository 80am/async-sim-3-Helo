import React, { Component } from 'react'
import './Dashboard.css'
import { withRouter } from 'react-router'
import home from '../Images/friendsterHome.png'
import search from '../Images/friendsterSearch.png'
import { Link } from 'react-router-dom'
import axios from "axios"
import { connect } from 'react-redux'



class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={

            friends: []

        }
    this.handleAddFriend=this.handleAddFriend.bind(this)
    }

    componentDidMount(){
        axios.get(`/api/getfriendslist`).then(res => this.setState({friends: res.data})
            // res =>console.log(res.data)
            
        )
    }

    handleAddFriend(id){

    }

    
    render(){
        let friendsList = this.state.friends.map(friend => {
            if (friend.firstname == null) {

                return (
                    "There are no friends for you"
                )
            } else {
                return (
                    <React.Fragment key={friend.id}>
                        <div className="biginfobox">
                            <div className="infoboxleft">
                                <div className="infoboxleft1">
                                <img src={friend.image} height="100%" width="100%"/>                                </div>
                            </div>
                            <div className="infoboxcenter">
                                <p>{friend.firstname}</p>
                                <p>{friend.lastname}</p>
                            </div>
                           <div className="infoboxleftt">
                               <button onClick={()=>this.handleAddFriend(friend.id)}>Add Friend</button>
                           </div>
                        </div>
                    </React.Fragment>
                )
            }
        })
        return(
            <mainbody>
                <header>
                    <div className="headerleft">
                        <Link to="/">
                        <button className="headerhelo">Helo</button>
                        </Link>
                        <Link to='/dashboard'>
                        <img src={home} alt=""/>
                        </Link>
                        <Link to='/Search'>
                        <img src={search} alt=""/>
                        </Link>
                    </div>
                    
                    <div className="headercenter">
                    <div>Dashboard</div>
                    </div>
                    
                    <div className="headerright">
                        <a href="http://localhost:5001/logout">
                        <div>Logout</div>
                        </a>
                    </div>
                </header>
                <div className="the6"></div>
                <div className="lowerhalf">
                <div className="middlewhitebox">
                <lowertop className="twobox">
                    <div className="boxleft">
                        <div className="userpic" value={this.props.image}></div>
                        <div className="boxleftright">
                            <p>{this.props.firstname}{this.props.lastname}</p>
                            <Link to="/profile">
                            <button>Edit Profile</button>
                            </Link>
                        </div>
                    </div>
                
                    <div className="boxright">
                   <div className="text"> Welcome to Helo! Find recommended friends based on your simiarities, and even search for them by name.  The more you uipdate your profile, the better recommendations we can make!
                   </div>
                    </div>
                </lowertop>

                <lowerbottom>
                    <upperlowerbox>
                    <div className="recfriends"><h3>Recommended Friends</h3></div>
                    <div className="sortby">Sorted by:
                    <select>
                        <option name="" value=""></option>
                        <option name="" value="firstname">First Name</option>
                        <option name="" value="lastname">Last Name</option>
                    </select>
                    </div>
                    </upperlowerbox>
                    <div className="friendsarea">
                        {friendsList}
                        {/* <div className="biginfobox">
                            <div className="infoboxleft">
                                <div className="infoboxleft1">
                                <img src="https://robohash.org/63.dfdf1.png?bgset=bg2" height="100%" width="100%"/>                                </div>
                            </div>
                            <div className="infoboxcenter">
                                <p>Flip</p>
                                <p>Flop</p>
                            </div>
                           <div className="infoboxleftt">
                               <button>Add Friend</button>
                           </div>
                        </div> */}

                       
                    </div>

                </lowerbottom>
                </div>
                </div>
            </mainbody>
        )
    }
}

function mapStateToProps(state) {
    return{
    persons: state.person,
    firstname: state.person.firstname,
    lastname: state.person.lastname,
    image: state.person.image   
    }
}

export default connect(mapStateToProps)(Dashboard);