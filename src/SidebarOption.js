import React from 'react';
import "./SidebarOption.css";
import { db } from "./firebase";
import { useDispatch } from "react-redux";
import { enterServer } from "./features/appSlice";

const SidebarOption = ({Icon, addServerOption, id}) => {
	const dispatch= useDispatch();

	const addServer = () => {
		const serverName = prompt("Please enter the Server Name");

		if (serverName) {
			db.collection('rooms').add({
			name: serverName,
		});
	}
};

	const selectServer = () => {
		if (id) {
			dispatch(enterServer({
				roomId: id
			}))
		}
	};

	return (
		<div className="sidebarOption" onClick={addServerOption ? addServer : selectServer}>
			{Icon && <Icon/>}
		</div>
	);
}

export default SidebarOption;