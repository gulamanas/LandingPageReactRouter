import React from 'react'
import './Hero.css'
import '../App.css'
import { Button } from './Button'

function Hero() {
    return (
        <div className='hero_container'>
            <video src="./videos/video-1.mp4" autoPlay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero_btns">
                <Button className='btns' buttonStyle='btn_outline' buttonSize='btn-large' >
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn_primary' buttonSize='btn-large' >
                    WATCH TRAILER <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    )
}

export default Hero
