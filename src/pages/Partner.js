import Footer from 'components/footers/MiniCenteredFooter.js';
import Header from 'components/headers/light.js';
import { PrimaryButton } from 'components/misc/Buttons';
import { SectionHeading } from 'components/misc/Headings';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
import tw from 'twin.macro';

const HeadingRow = tw.div`flex`;
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
const Description = tw.div`mb-6`;

export default ({
	headingText = 'Đối tác liên kết với Finepro',
	posts = [
		{
			imageSrc:
				'https://vcdn-kinhdoanh.vnecdn.net/2020/11/07/office-working-1-2-jpg-1604734-5209-4683-1604734359.jpg',
			category: 'Đối tác thân thiết',
			date: 'Hợp tác trên 3 năm',
			title: 'CÔNG TY TNHH CÔNG NGHIỆP PHÚC CẦN',
			description:
				'Công ty TNHH CN Phúc Cần được Ban Quản Lý các khu công nghiệp Tỉnh Bình Dương cấp giấy chứng nhận Đầu tư ngày 27 tháng 12 năm 2012 hoạt động sản xuất kinh doanh tại KCN Nam Tân Uyên, Tỉnh Bình Dương.',
			url: 'https://timerse.com',
			featured: true,
		},
	],
}) => {
	return (
		<AnimationRevealPage>
			<Header />
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>{headingText}</Heading>
					</HeadingRow>
					<Posts>
						{posts.map((post, index) => (
							<PostContainer key={index} featured={post.featured}>
								<Post className='group' as='a' href={post.url}>
									<Image imageSrc={post.imageSrc} />
									<Info>
										<Category>{post.category}</Category>
										<CreationDate>{post.date}</CreationDate>
										<Title>{post.title}</Title>
										{post.featured && post.description && (
											<Description>{post.description}</Description>
										)}
										<PrimaryButton buttonRounded={true} as='a' href='/san-pham'>
											Xem sản phẩm
										</PrimaryButton>
									</Info>
								</Post>
							</PostContainer>
						))}
					</Posts>
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);
};
