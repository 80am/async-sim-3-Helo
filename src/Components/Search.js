import React, { Component } from 'react'
import './Search.css'
import { withRouter } from 'react-router'
import home from '../Images/friendsterHome.png'
import search from '../Images/friendsterSearch.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

class Search extends Component {

    constructor(props) {
        super(props)
            this.state = {
                friends: [], 
                friends2: [],
                page: 1,
                filterInput: "",
                filterSelect:""
        }
        this.handlePageChange=this.handlePageChange.bind(this)
        this.paginate=this.paginate.bind(this)
        this.handleButton=this.handleButton.bind(this)
        this.handlefilterInput=this.handlefilterInput.bind(this)
        this.filterSelect=this.filterSelect.bind(this)
        this.handlefilterSearch=this.handlefilterSearch.bind(this)
        this.componentDidMount=this.componentDidMount.bind(this)
    }

    paginate(list, page=1, perPage=4){
       return list.slice((page - 1) * perPage, page * perPage)
    }


    componentDidMount(){
        axios.get(`/api/getusers`).then(res => this.setState({friends: res.data})
        // console.log("this is the search page")
        // axios.get(`/api/search?searchId=${1}`).then(res => this.setState({friends: res.data})    
        )
    }

    handlePageChange(number){
        // console.log('number', number)
        this.setState({
            page: number 
        })
        // console.log(this.state.page)
    }

    handleButton(){
        if(this.state.page = 1){}
    }

    filterSelect(e){
        console.log(this.state.filterSelect)
        this.setState({
            filterSelect: e.target.value
        })
    }

    handlefilterInput(e){
        console.log(this.state.filterInput)
        this.setState({
            filterInput: e.target.value
        })
    }

    handlefilterSearch(){
        console.log(this.state.filterSelect)
        if(this.state.filterSelect == "firstname"){
            axios.get(`/api/firstname?filterInput=${this.state.filterInput}`).then(res =>this.setState({friends: res.data}))
        }         
        else if
        (this.state.filterSelect == "lastname")
        {axios.get(`/api/lastname?filterInput=${this.state.filterInput}`).then(res =>this.setState({friends: res.data}))
            
        }
        else{ alert("Choose First Name or Last Name, Poor Favor")}
    }

    handleAddFriend(id){
        axios.post(`/api/addfriend`, id).then(()=>{})
    }
    render() {
        
        var pagedFriends = this.paginate(this.state.friends, this.state.page)
        var totalPages = Math.ceil(this.state.friends.length / 4)
        
        var buttons = [];
        var loopIt = () => {
            for(let i = 1; i <= totalPages; i++){
                buttons.push( <div className="current">
                {/* <p1 className="text">Page: </p1> */}
                    <div className="current1" key = {i} onClick={() =>{this.handlePageChange(i)}} value={i} >{i}</div>
                               </div>)
            }
        }

        loopIt();
        // console.log(buttons)
        // var numberofPages = (this.state.count / 4)
        // var actualCount = Math.ceil(numberofPages)
        
        let friendpages = pagedFriends.map(friend => {


            if (friend.id == null) {
              
                return (
                    <React.Fragment key={friend.auth_id}>
                    
                    <div className="biginfobox">
                            <div className="infoboxleft">
                                <div className="infoboxleft1">
                                <img src={friend.image} height="100%" width="100%"/>                                </div>
                            </div>
                            <div className="infoboxcenter">
                                <p>{(`${friend.firstname}`.toUpperCase())}</p>
                                <p>{(`${friend.lastname}`.toUpperCase())}</p>
                            </div>
                           <div className="infoboxleftt">
                               <button onClick={()=>this.handleAddFriend(friend.auth_id)}>Add Friend</button>
                           </div>
                        </div>
                                <br/>
                    
                    </React.Fragment>
                )
            }
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
                        <Link to='/Search'>
                            <img src={search} alt="" />
                        </Link>
                    </div>

                    <div className="headercenter">
                        <div>Search</div>
                    </div>

                    <div className="headerright">
                        <div>Logout</div>
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
                            <button className="resetbutton" onClick={this.componentDidMount}>Reset</button>

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
            </mainbody>

)
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