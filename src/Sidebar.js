import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExploreIcon from '@material-ui/icons/Explore';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SidebarOption from "./SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "./firebase";

const Sidebar = () => {
	const [servers, loading, error] = useCollection(db.collection("rooms"));

	return (
		<div className="sidebar">
			<div className="sidebar__logo">
				<img src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png" alt="" />
			</div>
			
			<div className="sidebar__seprator" />

			<div className="sidebar__avatar">
				{servers?.docs.map(doc => (
					<SidebarOption Icon={Avatar} key={doc.id} id={doc.id} 
				/>
				))} 
			</div>
			

			<div className="sidebar__icon" >
				<SidebarOption Icon={AddIcon} addServerOption />			
			</div>

			<div className="sidebar__icon"> <ExploreIcon/> </div>

			<div className="sidebar__seprator" />

			<div className="sidebar__icon"> <SaveAltIcon/> </div>

		</div>
	)
}

export default Sidebar;