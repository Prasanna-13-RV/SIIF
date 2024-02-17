import React from "react"
import { MediaPresenceHero } from "../../components/media/mediaPresence/MediaPresenceHero"
import { MediaPresenceContent } from "../../components/media/mediaPresence/MediaPresenceContent"
import { Helmet } from "react-helmet"

export const MediaPresence = () => {
	return (
		<>
			<Helmet title="Media Presence | SIIF" />
			<MediaPresenceHero />
			<MediaPresenceContent />
		</>
	)
}
