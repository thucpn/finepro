import ContactDetails from 'components/cards/ThreeColContactDetails.js';
import Footer from 'components/footers/MiniCenteredFooter.js';
import ContactUsForm from 'components/forms/TwoColContactUsWithIllustrationFullForm.js';
import Header from 'components/headers/light.js';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import React from 'react';

export default () => {
	return (
		<AnimationRevealPage>
			<Header />
			<ContactUsForm />
			<ContactDetails cards={[]} />
			<Footer />
		</AnimationRevealPage>
	);
};
