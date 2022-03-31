import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings.js';
import EmailIllustrationSrc from 'images/email-illustration.svg';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
	tw`md:w-7/12 mt-16 md:mt-0`,
	props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
	`background-image: url("${props.imageSrc}");`,
	tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
	SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: 'textarea' })`
	${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
	subheading = 'Liên hệ',
	heading = (
		<>
			Đừng ngần ngại <span tw='text-primary-500'>liên hệ</span>
			<wbr /> với chúng tôi.
		</>
	),
	description = 'Tất cả những thắc mắc, khó khăn mà quý khách gặp phải trong quá trình sử dụng dịch vụ của chúng tôi dù trong giờ hành chính hay ngoài giờ làm việc.',
	submitButtonText = 'Gửi email',
	formMethod = 'post',
	textOnLeft = true,
}) => {
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [body, setBody] = useState('');

	return (
		<Container>
			<TwoColumn>
				<ImageColumn>
					<Image imageSrc={EmailIllustrationSrc} />
				</ImageColumn>
				<TextColumn textOnLeft={textOnLeft}>
					<TextContent>
						{subheading && <Subheading>{subheading}</Subheading>}
						<Heading>{heading}</Heading>
						{description && <Description>{description}</Description>}
						<Form
							action={`mailto:thucsh2@gmail.com?subject=${subject} from ${name}&body=${body}`}
							method={formMethod}
						>
							<Input
								type='text'
								name='name'
								placeholder='Tên của bạn'
								onChange={(e) => setName(e.target.value)}
							/>
							<Input
								type='text'
								name='subject'
								placeholder='Tóm tắt vấn đề'
								onChange={(e) => setSubject(e.target.value)}
							/>
							<Textarea
								name='body'
								placeholder='Chi tiết vấn đề, yêu cầu,...'
								onChange={(e) => setBody(e.target.value)}
							/>
							<SubmitButton type='submit'>{submitButtonText}</SubmitButton>
						</Form>
					</TextContent>
				</TextColumn>
			</TwoColumn>
		</Container>
	);
};
