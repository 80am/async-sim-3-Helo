import React, { Component } from 'react'
import './Dashboard.css'
import { withRouter } from 'react-router'
import home from '../Images/friendsterHome.png'
import search from '../Images/friendsterSearch.png'
import { Link } from 'react-router-dom'
import axios from "axios"
import { connect } from 'react-redux'



class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

            friends: [],
            filterSelect: "",
            sortedFriends: [],
            firstname: '',
            lastname: '',
            image:""

        }
        this.handleAddFriend = this.handleAddFriend.bind(this)
        this.handleSort = this.handleSort.bind(this)
    }

    componentDidMount() {
        axios.get(`/api/getusers/`).then((res) => {this.setState({ friends: res.data })
        
        })
        axios.get('/api/myinfo/').then((res)=> {this.setState({firstname: res.data[0].firstname, lastname: res.data[0].lastname, image: res.data[0].image})
        })
        
    }


    handleAddFriend(id) {
        axios.post(`/api/addfriend/${id}`).then(() => 
                {this.componentDidMount() })
    }
    handleSort(e) {
        
        this.setState({
            filterSelect: e.target.value
        }, () => {
            var listoffriends = [...this.state.friends]
            var compare = (a, b) => {

               
                const nameA = a[this.state.filterSelect].toUpperCase();
                const nameB = b[this.state.filterSelect].toUpperCase();

                
                if (nameA > nameB) {
                    return 1;
                } else if (nameA < nameB) {
                    return  -1;
                }
                
            }
            if(this.state.filterSelect){
                var sortedFriends = listoffriends.sort(compare);
                this.setState({
                     sortedFriends
                })
            }
            else{
                this.setState({
                    sortedFriends: []
                })
            }

        }

    )

    }

    render() {
        var firstName = this.state.firstname ? this.state.firstname : this.props.firstname
        // var uppername = (`${firstname}`)
        var name = firstName.toUpperCase();
        
        var lastName = this.state.lastname ? this.state.lastname : this.props.lastname
        // var upperlast = (`${this.state.lastname}`)
        var last = lastName.toUpperCase();
       
        var image = this.state.image ? this.state.image : `https://robohash.org/${this.props.firstname}.png?bgset=bg1`

        var friends = this.state.sortedFriends.length ? this.state.sortedFriends : this.state.friends 
        let friendsList = friends.map(friend => {

            return (
                <React.Fragment key={friend.user_id}>
                    <div className="biginfobox">
                        <div className="infoboxleft">
                            <div className="infoboxleft1">
                                <img src={friend.image} height="100%" width="100%" />                                </div>
                        </div>
                        <div className="infoboxcenter">
                            <p>{(`${friend.firstname}`.toUpperCase())}</p>
                            <p>{(`${friend.lastname}`.toUpperCase())}</p>
                        </div>
                        <div className="infoboxleftt">
                            <button className="addfriend" onClick={() => this.handleAddFriend(friend.user_id)}>Add Friend</button>
                        </div>
                    </div>
                </React.Fragment>
            )

        })
        return (
            <mainbody>
                <header>
                    <div className="headerleft">
                        <Link to="/">
                            <button className="headerhelo">Helo</button>
                        </Link>
                        <Link to='/dashboard'>
                            <img src={home} alt="" />
                        </Link>
                        <Link to={{ pathname: `/search/` }}>
                            <img src={search} alt="" />
                        </Link>
                    </div>

                    <div className="headercenter">
                        <div>Dashboard</div>
                    </div>

                    <div className="headerright">
                        <a href="http://localhost:5001/logout">
                            <button>Logout</button>
                        </a>
                    </div>
                </header>
                <div className="the6"></div>
                <div className="lowerhalf">
                    <div className="middlewhitebox">
                        <lowertop className="twobox">
                            <div className="boxleft">

                                <img className="userpic" src={image} height="100%" width="100%" />

                                <div className="boxleftright">
                                    <p><b>{name}</b></p>
                                    <p><b>{last}</b></p>
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
                    <select onChange={this.handleSort}>
                                        <option name="" value=""></option>
                                        <option name="" value="firstname">First Name</option>
                                        <option name="" value="lastname">Last Name</option>
                                        <option name="" value="gender">Gender</option>
                                    </select>
                                </div>
                            </upperlowerbox>
                            <div className="friendsarea">

                                {friendsList}

                            </div>

                        </lowerbottom>
                    </div>
                </div>
            </mainbody>
        )
    }
}

function mapStateToProps(state) {
    return {
        persons: state.person,
        firstname: state.person.firstname,
        lastname: state.person.lastname,
        image: state.person.image
    }
}

export default connect(mapStateToProps)(Dashboard);