import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import { SectionDescription } from 'components/misc/Typography';
import { ReactComponent as GithubIcon } from 'images/github-icon.svg';
import { ReactComponent as LinkedinIcon } from 'images/linkedin-icon.svg';
import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg';
import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
import tw from 'twin.macro';

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
	${(props) =>
		css`
			background-image: url('${props.imageSrc}');
		`}
	${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
	${tw`flex flex-col items-center mt-6`}
	.position {
		${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
	}
	.name {
		${tw`mt-1 text-xl font-medium text-gray-900`}
	}
`;

export default ({
	heading = 'Lãnh đạo và nhà đầu tư',
	subheading = 'Nhân lực',
	description = 'Những người đặt mầm mống cho sự phát triển của Finepro',
	cards = [
		{
			imageSrc:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
			position: 'Tổng giám đốc',
			name: 'Đỗ Thị Phương Dung',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
			position: 'Nhà đầu tư',
			name: 'Hoàng Văn Hà',
			links: [
				{
					url: 'https://twitter.com',
					icon: TwitterIcon,
				},
				{
					url: 'https://linkedin.com',
					icon: LinkedinIcon,
				},
				{
					url: 'https://github.com',
					icon: GithubIcon,
				},
			],
		},
	],
}) => {
	return (
		<Container>
			<ContentWithPaddingXl>
				<HeadingContainer>
					{subheading && <Subheading>{subheading}</Subheading>}
					{heading && <Heading>{heading}</Heading>}
					{description && <Description>{description}</Description>}
				</HeadingContainer>
				<Cards>
					{cards.map((card, index) => (
						<Card key={index}>
							<CardImage imageSrc={card.imageSrc} />
							<CardContent>
								<span className='position'>{card.position}</span>
								<span className='name'>{card.name}</span>
							</CardContent>
						</Card>
					))}
				</Cards>
			</ContentWithPaddingXl>
		</Container>
	);
};
