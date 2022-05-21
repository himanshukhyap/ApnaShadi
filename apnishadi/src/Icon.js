import React from 'react'
import {AiFillApple, AiOutlineLogin, AiOutlineSortAscending} from "react-icons/ai"
import {BiSortDown} from "react-icons/bi"
import { BsSearch } from 'react-icons/bs'
import { FaGoogle } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
    const SortByAZ = <AiOutlineSortAscending size={25}/>
    const SortByRating = <BiSortDown size={25}/>
const searchicon = <BsSearch/>

const FacebookIcon = <ImFacebook size={25}/>
const GoogleIcon = <FaGoogle size={25}/>
const AppleIcon = <AiFillApple size={25}/>
const LockIcon = <RiLockPasswordFill size={25}/>
const EmailIcon = <MdEmail size={25}/>

const LoginIcon = <AiOutlineLogin size={25}/>


export  {SortByAZ,SortByRating, searchicon, FacebookIcon, GoogleIcon, AppleIcon, LockIcon, EmailIcon, LoginIcon} ;
