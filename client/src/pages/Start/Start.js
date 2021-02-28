import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Start.css';
import groupLogo from '../../assets/group.png';
import doggyDataLogo from '../../assets/doggyData.png';
import Button from '@material-ui/core/Button';

class Start extends Component {
    state={
      
    };

    render(){
        console.log('=========', this.state);
        console.log('this props, Start page: ', this.props);

        return (
            <div className='Start'>
                <img src={doggyDataLogo} alt="doggy data" className='doggyDataImage'/>

                <section>
                    <div className='disp-flex align-items--center flex-dir-col' style={{paddingTop: '130px'}}>
                        <div className='dogImgBg'>
                            <img src={groupLogo} alt="group logo" style={{width: '105px'}}/>
                        </div>

                        <h1 style={{paddingTop: '38px'}}>We're excited to meet {this.props.newDogGlobal.name}!</h1>

                        <div style={{paddingTop: '58px'}}>
                            <Link to='/basic-info'>
                            <Button 
                                variant='contained'
                                style={{backgroundColor: '#553635', color: 'white', fontSize: '14px'}}
                            >START LOGGING
                            </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

// access state in reducer
const mapStateToProps = state =>{
    return {
        newDogGlobal: state.addNewDogRedu.newDog,
    }
}

export default connect(mapStateToProps)(Start);