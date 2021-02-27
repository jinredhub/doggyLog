import React, { Component } from 'react';
import './Result.css';
import groupLogo from '../../assets/group.png';
import doggyDataLogo from '../../assets/doggyData.png';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

class Result extends Component {
    state={

    };

    render(){
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: '#b79593'
                }
            },
            typography: {
                fontFamily: 'Lato, sans-serif'
            }
        });

        return (
            <ThemeProvider theme={theme}>
                <div className='Result'>
                    <img src={doggyDataLogo} alt="doggy data" className='doggyDataImage'/>
                    <section>
                        <div className='disp-flex flex-dir-col align-items--center' style={{paddingTop: '80px'}}>
                            <div className='dogImgBg'>
                                <img src={groupLogo} alt="group logo" style={{width: '45px'}}/>
                            </div>
                            <div style={{paddingTop: '10px', color: '#b79593', fontSize: '16px'}}>NAME</div>
                        </div>

                        
                    </section>
                </div>
            </ThemeProvider>
        )
    }
}

export default Result;