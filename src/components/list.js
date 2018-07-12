import React from 'react';
import {Component as BunnyComponent} from 'react';
import {connect as bunnyConnect} from 'react-redux';
import {getBunnyData} from '../actions';
import {Link as BunnyLink} from 'react-router-dom';

class BunnyList extends BunnyComponent {
    componentDidMount(){
        this.props.getBunnyData();
    }
    
    render(){
        console.log('props list', this.props.list);
        const bunnyDoList = this.props.list.map(item=>{
            return(
                <li className="collection-item" key={item._id}><BunnyLink to={`/todo/${item._id}`}>{item.title}</BunnyLink></li>
            )
        });
        
        return(
            <div>
                <div className='center'>
                    <h1>Bunny-Do List</h1>
                    <BunnyLink to='/add-item' className='btn purple'>Add Bunny Do</BunnyLink>
                </div>
                <ul className="collection">
                    {bunnyDoList}
                </ul>
            </div>
        )

    }
}
function mapBunnyStateToProps(state){
    return{
    list: state.list.allItems
    }
}
export default bunnyConnect(mapBunnyStateToProps, {getBunnyData})(BunnyList);