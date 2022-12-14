import React from 'react';

const UserCabIcon = ({ classes }: { classes: string }) => {
	return (
		<div className={classes}>
			<svg
				width="11"
				height="12"
				viewBox="0 0 11 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.04341 5.56522C6.5802 5.56522 7.82602 4.3194 7.82602 2.78261C7.82602 1.24582 6.5802 0 5.04341 0C3.50662 0 2.2608 1.24582 2.2608 2.78261C2.2608 4.3194 3.50662 5.56522 5.04341 5.56522Z"
					fill="white"
				/>
				<path
					d="M5.04348 6.95655C2.25804 6.95655 0 9.21459 0 12H10.087C10.087 9.21459 7.82892 6.95655 5.04348 6.95655Z"
					fill="white"
				/>
			</svg>
		</div>
	);
};

export default UserCabIcon;
