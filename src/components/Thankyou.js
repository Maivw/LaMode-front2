import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "../index.css";

export default function Thankyou({ open, onClose }) {
	return (
		<>
			<Modal open={open} onClose={onClose}>
				<img src="https://res.cloudinary.com/maivw/image/upload/v1600371018/Lamode/Copy_of_thank_you_for_shopping_message_card_-_Made_with_PosterMyWall_ah3u5z.jpg" />
			</Modal>
		</>
	);
}
