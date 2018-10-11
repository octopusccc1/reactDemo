import React, { Component } from 'react';
import { SectionsContainer, Section, Header, Footer ,ScrollToTopOnMount} from 'react-fullpage';


class BBS extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let options = {
			activeClass: 'section',
			anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
			scrollBar: false,
			navigation: true,
			verticalAlign: false,
			sectionPaddingTop: '0',
			sectionPaddingBottom: '0',
			arrowNavigation: true
		};
		return (
			<div>
				<ScrollToTopOnMount/>
				<SectionsContainer className="container" {...options}>
					<Section >
						<div>page11111page11111page11111page11111page11111page11111page11111</div>
					</Section>
					<Section className="section">
						<div>222</div>
					</Section>
					<Section >
						<div>333</div>
					</Section>
				</SectionsContainer>
			</div>
		)
	}
}

export default BBS;