import Footer from 'components/footers/MiniCenteredFooter.js';
import Header from 'components/headers/light.js';
import { PrimaryButton } from 'components/misc/Buttons';
import { SectionHeading } from 'components/misc/Headings';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
import tw from 'twin.macro';

const HeadingRow = tw.div`flex mb-6`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
	${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
	${(props) =>
		props.featured &&
		css`
			${tw`w-full!`}
			${Post} {
				${tw`sm:flex-row! h-full sm:pr-4`}
			}
			${Image} {
				${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
			}
			${Info} {
				${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
			}
			${Description} {
				${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
			}
		`}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
	${(props) =>
		css`
			background-image: url('${props.imageSrc}');
		`}
	${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const Input = tw.input`mt-6 mr-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;

export default ({
	headingText = 'Sản phẩm và dự án của công ty Phúc Cần',
	posts = [
		{
			imageSrc:
				'https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			category: 'Dự án',
			title: 'Sản xuất xe hơi chạy bằng điện',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			category: 'Dự án',
			title: 'Nghiên cứu kỹ thuật laze xanh',
		},
		{
			imageSrc:
				'https://images.unsplash.com/photo-1628843226223-989e20810393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
			category: 'Sản phẩm',
			title: 'Bếp điện dân dụng an toàn tiện lợi',
		},

		{
			imageSrc:
				'https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			category: 'Sản phẩm',
			title: 'Máy rửa chén dĩa hoàn toàn tự động',
		},
	],
}) => {
	const [name, setName] = useState('');
	console.log(name);

	const [visible, setVisible] = useState(6);
	const onLoadMoreClick = () => {
		setVisible((v) => v + 6);
	};

	return (
		<AnimationRevealPage>
			<Header />
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>{headingText}</Heading>
					</HeadingRow>
					<div style={{ display: 'flex' }}>
						<div>
							<Input
								type='text'
								name='name'
								placeholder='Điền mã sản phẩm'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<PrimaryButton buttonRounded={true}>Tìm</PrimaryButton>
						</div>
					</div>

					<Posts>
						{posts.slice(0, visible).map((post, index) => (
							<PostContainer key={index} featured={post.featured}>
								<Post className='group'>
									<Image imageSrc={post.imageSrc} />
									<Info>
										<Category>{post.category}</Category>
										<CreationDate>{post.date}</CreationDate>
										<Title>{post.title}</Title>
										{post.featured && post.description && (
											<Description>{post.description}</Description>
										)}
									</Info>
								</Post>
							</PostContainer>
						))}
					</Posts>
					{visible < posts.length && (
						<ButtonContainer>
							<LoadMoreButton onClick={onLoadMoreClick}>Xem thêm</LoadMoreButton>
						</ButtonContainer>
					)}
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};
