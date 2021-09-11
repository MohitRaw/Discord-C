import React from 'react';
import"./Chatpage.css";
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InboxIcon from '@material-ui/icons/Inbox';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectRoomId } from "./features/appSlice"
import RedeemIcon from '@material-ui/icons/Redeem';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const Chatpage = ({serverName, serverId}) => {
	const sendMessage = (e) => {
		e.preventDefault();
	};

	return (
		<div className="chatpage">

			<div className="chatpage__header">
				<div className="header__left">
					<h3><span>@</span> FriendName</h3>
					<RadioButtonCheckedIcon />
					<div className="chatpage__aka">AKA</div>
					<p>friend</p>
				</div>

				<div className="header__right">
					<CallIcon />
					<VideocamIcon />
					<BookmarkIcon />
					<PersonAddIcon />
					
					<div className="header__search">
						<SearchIcon /> 
						<input type="text" placeholder="search"/>
					</div>

					<InboxIcon />
					<HelpIcon />

				</div>					
			</div>
			
		
			<div className="chatpage__body">
				
			</div>

			<div className="body__bottom">
				<form type="submit" onClick={sendMessage} className= "bottom__form">
					< AddCircleIcon />	
					<input type="text" placeholder="message @friend" />
					
					<div className="form__icon" >
						<RedeemIcon />
						<GifIcon />
						<EmojiEmotionsIcon />
					</div>
					
				</form>
			</div>

		</div>
	);
}

export default Chatpage;