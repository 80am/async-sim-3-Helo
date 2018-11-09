import React, { Component } from 'react'
import './Search.css'
import { withRouter } from 'react-router'
import home from '../Images/friendsterHome.png'
import search from '../Images/friendsterSearch.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Motion, spring} from 'react-motion'

class Search extends Component {

    constructor(props) {
        super(props)


        this.state = {
            friends: [],
            friends2: [],
            page: 1,
            filterInput: "",
            filterSelect: "",
            currentFriends: [],
            sortedFriends: []
        }
        this.handlePageChange = this.handlePageChange.bind(this)
        this.paginate = this.paginate.bind(this)
        this.handleButton = this.handleButton.bind(this)
        this.handlefilterInput = this.handlefilterInput.bind(this)
        this.filterSelect = this.filterSelect.bind(this)
        this.handlefilterSearch = this.handlefilterSearch.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)

    }
    
    paginate(list, page = 1, perPage = 4) {
        return list.slice((page - 1) * perPage, page * perPage)
    }
    
    
    componentDidMount() {
        let friends = axios.get(`/api/everyoneElse`).then((res) => {
            this.setState({ friends: res.data })
        }
        )
        let friends2 = axios.get(`/api/myfriends`).then((res) => {
            this.setState({ friends2: res.data })
        }
        )
        
    }

    handlePageChange(number) {
        this.setState({
            page: number
        })
    }

    handleButton() {
        if (this.state.page = 1) { }
    }

    filterSelect(e) {
        console.log(this.state.filterSelect)
        this.setState({
            filterSelect: e.target.value
        })
    }

    handlefilterInput(e) {
        console.log(this.state.filterInput)
        this.setState({
            filterInput: e.target.value
        })
    }
    handleReset(){
        this.setState({
            filterSelect: "",
            sortedFriends:[]
        })
    
    }

    handlefilterSearch() {
        let friends = [...this.state.friends, ...this.state.friends2]
        var alphafriends = friends.sort((a,b) => (a[this.state.filterSelect] > b[this.state.filterSelect]) ? 1 : ((b[this.state.filterSelect] > a[this.state.filterSelect]) ? -1 : 0));

        if (this.state.filterSelect) {
            var sorted = alphafriends.filter(friend => {
                console.log(sorted)
                return friend[this.state.filterSelect].includes(this.state.filterInput)
            })
            this.setState({
                sortedFriends: sorted
            })
        }
        else {
            this.setState({
                sortedFriends: []
            })
        }
    }

    handleAddFriend(id) {
        axios.post(`/api/addfriend/${id}`).then(() => 
                {this.componentDidMount() })
    }
    handleDeleteFriend(id) {
        axios.post(`/api/deletefriend/${id}`).then(() => 
                {this.componentDidMount()})
    }
    render() {
        
        if (this.state.friends != [] && this.state.friends2 != []) {
           
            this.state.currentFriends = [...this.state.friends, ...this.state.friends2]
            this.state.currentFriends.sort((a,b) => (a.firstname > b.firstname) ? 1 : ((b.firstname > a.firstname) ? -1 : 0));


            var friends = this.state.sortedFriends.length ? this.state.sortedFriends : this.state.currentFriends
            console.log("this is sortedFriends length", friends)
            var pagedFriends = this.paginate(friends, this.state.page)
            var totalPages = Math.ceil(friends.length / 4)

            var buttons = [];
            var loopIt = () => {
                for (let i = 1; i <= totalPages; i++) {
                    buttons.push(<div className="current">
                        <div className="current1" key={i} onClick={() => { this.handlePageChange(i) }} value={i} >{i}</div>
                    </div>)
                }
            }

            loopIt();


            let friendpages = pagedFriends.map(friend => {

                if (friend.user_id != this.state.friends2.user_id) {
                    if (friend.friend_id) {

                        return (
                            <Motion defaultStyle={{ x: -200, opacity: 0 }}
                            style={{ x: spring(0), opacity: spring(1) }}
                            >
                            {style => (

                                <React.Fragment key={friend.user_id} style={{
                                    transform: `tranX(${style.x}px)`,
                                    opacity: style.opacity
                                    }}
                                >

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
                                        <button className="removefriend" onClick={() => this.handleDeleteFriend(friend.user_id)}>Remove</button>
                                    </div>
                                </div>
                                <br />

                            </React.Fragment>
                            )}
                            </Motion>
                        )
                    } else {
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
                                <br />

                            </React.Fragment>
                        )
                    }
                } else {

                }
            })

            return (
                <mainbody>
                    {this.state.friends.length > 0 &&

                        <div>
                            <header>
                                <div className="headerleft">
                                    <Link to="/">
                                        <button className="headerhelo">Helo</button>
                                    </Link>
                                    <Link to='/dashboard'>
                                        <img src={home} alt="" />
                                    </Link>
                                    <Link to='/Search'>
                                        <img src={search} alt="" />
                                    </Link>
                                </div>

                                <div className="headercenter">
                                    <div>Search</div>
                                </div>

                                <div className="headerright">
                                <a href="http://localhost:5001/logout">
                                    <button>Logout</button>
                                    </a>
                                </div>
                            </header>
                            <div className="the61"></div>
                            <div className="lowerhalf3">
                                <div className="middlewhitebox3">
                                    <lowertop3>
                                        {/* filter part at the top     */}
                                        <select onChange={this.filterSelect} className="selectbox">
                                            <option value=""></option>
                                            <option value="firstname">First Name</option>
                                            <option value="lastname">Last Name</option>
                                        </select>
                                        <input onChange={this.handlefilterInput} type="text" />
                                        <button className="searchbutton" onClick={this.handlefilterSearch}>Search</button>
                                        <Link to="/search">
                                            <button className="resetbutton" onClick={()=>{this.handleReset()}}>Reset</button>
                                        </Link>
                                    </lowertop3>
                                    <midbottom3>
                                        {/* where friends load in     */}
                                        {friendpages}

                                    </midbottom3>
                                    <lowerbottom3>
                                        {/* bottom where page bar is     */}



                                        <div className="pagebar" onClick={this.handleButton}>
                                            {buttons}

                                        </div>
                                    </lowerbottom3>
                                </div>
                            </div>
                        </div>
                    }
                    {this.state.friends.length === 0 &&
                        <div>Waiting for your friends to get out of the pool, please hold...</div>
                    }
                </mainbody>

            )
        }
    }
}
export default withRouter(Search)



// axios.get(`/api/getfriendslist`).then(res => this.setState({friends2: res.data})

// )
// console.log(this.state.friends[0].firstname)
//     let filteredList = this.state.friends.firstname.filter(friend => {
//         return friend[0].firstname === (this.state.filter);
//     })
// console.log(filteredList)

// var filteredPeople = []
//     function searchPeopleInArray(){ 
// if(this.state.filterSelect = 'firstname'){
//         for (let j=0; j<=this.state.friends.length; j++) {
//             if (this.state.friends[j].firstname.match(this.state.filter)) 
//              return (filteredPeople.push(j))
//         } 
// }else if(this.state.filterSelect = 'lastname'){
//             for (let j=0; j<=this.state.friends.length; j++) {
//                 if (this.state.friends[j].lastname.match(this.state.filter)) 
//                  return (filteredPeople.push(j))

//             }
// } else if(this.state.filterSelect = ''){
//         return alert("Choose search by First Name or Last Name")
//     }
//     console.log(filteredPeople)