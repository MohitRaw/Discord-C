import React from 'react';
import "./Chatbar.css";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import PolymerIcon from '@material-ui/icons/Polymer';
import AddIcon from '@material-ui/icons/Add';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import MicOffIcon from '@material-ui/icons/MicOff';

import { Avatar } from '@material-ui/core';


const Chatbar = () => {
	return (
		<div className="chatbar">
			<div className="chatbar__header">
				<input type="text" placeholder="Find or start a conversation" />
			</div>

			<div className="chatbar__mid">
				<div className="chatbar__icon">
					<p><span><EmojiPeopleIcon /></span>Friends</p>
					<p><span><SettingsInputAntennaIcon /></span>Stage Discovery</p>
					<p><span><PolymerIcon /></span>Nitro</p>
				</div>

				<div className="direct"><p>DIRECT MESSAGE<span><AddIcon /></span></p></div>

				<div className="chatbar__avatar">
					<Avatar />
				</div>
			</div>
			

			<div className="chatbar__bottom">
				<Avatar /> 
				
				<div>
					<p>RawG12</p>
					<p>#0353</p>
				</div>

				<MicIcon />
				<MicOffIcon/>
				<HeadsetIcon />
				<SettingsIcon />
			</div>

		</div>
	);
}

export default Chatbar;