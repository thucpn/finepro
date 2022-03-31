import { Container as ContainerBase } from 'components/misc/Layouts.js';
import React from 'react';
import tw from 'twin.macro';
import logo from '../../images/logo.svg';

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
	return (
		<Container>
			<Content>
				<Row>
					<LogoContainer>
						<LogoImg src={logo} />
						<LogoText>Finepro</LogoText>
					</LogoContainer>
					<LinksContainer>
						<Link href='/'>Trang chủ</Link>
						<Link href='/ve-chung-toi'>Về chúng tôi</Link>
						<Link href='/lien-he'>Liên hệ</Link>
						<Link href='/doi-tac'>Đối tác</Link>
					</LinksContainer>
					<CopyrightText>&copy; 2022 Bản quyền thuộc về Finepro Automation</CopyrightText>
				</Row>
			</Content>
		</Container>
	);
};
