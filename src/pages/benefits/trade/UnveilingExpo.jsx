import React from "react"
import HeroSection from "../../../components/common/Hero/HeroSection"
import { ComingSoon } from "../../../components/common/extra/ComingSoon"

export const UnveilingExpo = () => {
	return (
		<>
			<HeroSection
				title="Unveiling Expo"
				image="https://cdn.pixabay.com/photo/2017/11/11/11/20/expo-2938862_960_720.jpg"
				desc="An incredible team that steers the entire unit with expertise and
        great enthusiasm. "
			/>
			<ComingSoon />
		</>
	)
}
