import React,{Component} from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


class Homepage extends Component{

    render(){

        return <div >

            <Header>Header</Header>
            <Body/>
            <Footer/>
          
        </div>
    }

}

export default Homepage