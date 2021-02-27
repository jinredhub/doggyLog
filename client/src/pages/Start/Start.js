import React, { Component } from 'react';
import './Start.css';
import groupLogo from '../../assets/group.png';
import doggyDataLogo from '../../assets/doggyData.png';
import Button from '@material-ui/core/Button';

class Start extends Component {
    state={
      
    };

    render(){

        return (
            <div className='Start'>
                <img src={doggyDataLogo} alt="doggy data" className='doggyDataImage'/>

                <section>
                    <div className='disp-flex align-items--center flex-dir-col' style={{paddingTop: '130px'}}>
                        <div className='dogImgBg'>
                            <img src={groupLogo} alt="group logo" style={{width: '105px'}}/>
                        </div>

                        <h1 style={{paddingTop: '38px'}}>We're excited to meet NAME!</h1>

                        <div style={{paddingTop: '58px'}}>
                            <Button 
                                href='/basic-info'
                                variant='contained'
                                style={{backgroundColor: '#553635', color: 'white', fontSize: '14px'}}
                            >START LOGGING
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Start;