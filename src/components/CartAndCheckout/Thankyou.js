import React from "react";

import Modal from "@material-ui/core/Modal";

export default function Thankyou({ open, onClose }) {
	return (
		<>
			<Modal open={open} onClose={onClose}>
				<img
					style={{
						height: 400,
						width: 300,
						objectFit: "cover",
						top: "50%",
						left: "50%",
					}}
					src="https://res.cloudinary.com/maivw/image/upload/v1600371018/Lamode/Copy_of_thank_you_for_shopping_message_card_-_Made_with_PosterMyWall_ah3u5z.jpg"
				/>
			</Modal>
		</>
	);
}
