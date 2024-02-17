import React from "react"
import "./SocailMediaIcons.css"

export const SocailMediaIcons = () => {
	return (
		<div id="fixed-social">
			<div>
				<a href="#" class="fixed-facebook" target="_blank">
					<img
						width="48"
						height="48"
						src="https://img.icons8.com/color/48/facebook-new.png"
						alt="facebook-new"
					/>
					<span>Facebook</span>
				</a>
			</div>
			<div>
				<a href="#" class="fixed-twitter" target="_blank">
					<img
						width="48"
						height="48"
						src="https://img.icons8.com/color/48/twitter--v1.png"
						alt="twitter--v1"
					/>
					<span>Twitter</span>
				</a>
			</div>
			<div>
				<a href="#" class="fixed-instagrem" target="_blank">
					<img
						width="48"
						height="48"
						src="https://img.icons8.com/fluency/48/instagram-new.png"
						alt="instagram-new"
					/>
					<span>Instagram</span>
				</a>
			</div>
		</div>
	)
}
