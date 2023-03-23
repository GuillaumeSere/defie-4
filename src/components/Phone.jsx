import React from 'react'
import './phone.css'
import { FiChevronLeft } from 'react-icons/fi'
import { VscKebabVertical } from 'react-icons/vsc'
import { IoChevronForwardCircleSharp } from 'react-icons/io5'
import avatar from '../images/avatar.jpg'
import dog1 from '../images/dog-image-1.jpg'
import dog2 from '../images/dog-image-2.jpg'
import dog3 from '../images/dog-image-3.jpg'
import BullePink from './BullePink'
import BulleWhite from './BulleWhite'
import './bulle.css'

const Phone = ({ props }) => {
    return (
        <div className='container'>
            <div className="card-phone">
                <div className="card-ecran">
                    <div className="card-head">
                        <div className="banner"></div>
                        <FiChevronLeft className='chevron' />
                        <div className="card-user">
                            <img src={avatar} alt="avatar" />
                            <h5>Samuel Green</h5>
                            <p>Available to Walk</p>
                            <VscKebabVertical className='kebab' />
                        </div>
                    </div>
                    <BullePink content={"That sounds great. I’d be happy with that."} />
                    <BullePink content={"Could you send over some pictures of your dog, please?"} />
                    <div className="image">
                        <img src={dog1} alt="dog" />
                        <img src={dog2} alt="dog" />
                        <img src={dog3} alt="dog" />
                    </div>
                    <BulleWhite content={"Here are a few pictures. She’s a happy girl!"} />
                    <div className="small-bulle">
                        <p>Can you make it?</p>
                    </div>
                    <BullePink content={"She looks so happy! The time we discussed works. How long shall I take her out for?"} />
                    <div className="price-bulle">
                        <div className="circle"></div>
                        <div className="info">
                            <p>30 minute walk</p>
                            <span>$29</span>
                        </div>
                    </div>
                    <div className="price-bulle">
                        <div className="circle"></div>
                        <div className="info">
                            <p>1 hour walk</p>
                            <span>$49</span>
                        </div>
                    </div>
                    <div className="message-bulle">
                        <input type="text" placeholder='Type a message…' />
                        <IoChevronForwardCircleSharp className='chevron-message' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phone
