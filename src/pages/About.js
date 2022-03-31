import TeamCardGrid from 'components/cards/ProfileThreeColGrid.js';
import Features from 'components/features/ThreeColSimple.js';
import MainFeature1 from 'components/features/TwoColWithButton.js';
import Footer from 'components/footers/MiniCenteredFooter.js';
import Header from 'components/headers/light.js';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import ShieldIconImage from 'images/shield-icon.svg';
import CustomizeIconImage from 'images/customize-icon.svg';
import SupportIconImage from 'images/support-icon.svg';
import React from 'react';
import tw from 'twin.macro';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
	return (
		<AnimationRevealPage>
			<Header />
			<MainFeature1
				subheading={<Subheading>Về Finepro</Subheading>}
				heading='Công ty tự động hoá hiện đại'
				buttonRounded={false}
				primaryButtonText='Liên hệ hợp tác'
				imageSrc='https://images.unsplash.com/photo-1615378809998-afc205e73bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
			/>
			<Features
				subheading={<Subheading>Các giá trị cốt lõi</Subheading>}
				heading='Chúng tôi hướng đến'
				description='Phục vụ khách hàng hết mình, tận tâm. Cung cấp giải pháp uy tín, chất lượng'
				cards={[
					{
						imageSrc: ShieldIconImage,
						title: 'An toàn',
						description: 'Chúng tôi đề cao yếu tố an toàn lên hàng đầu.',
					},
					{
						imageSrc: SupportIconImage,
						title: 'Hỗ trợ 24/7',
						description: 'Luôn đồng hành với quý khách hàng mọi lúc mọi nơi.',
					},
					{
						imageSrc: CustomizeIconImage,
						title: 'Đa dạng',
						description: 'Đầy đủ danh mục, sản phẩm và giải pháp.',
					},
				]}
				linkText=''
			/>
			<TeamCardGrid />
			<Footer />
		</AnimationRevealPage>
	);
};
