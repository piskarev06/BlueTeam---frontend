import React, { FC } from 'react'

//@ts-ignore
import google from 'assets/images/google.svg'
//@ts-ignore
import video from 'assets/video/hi_res.mp4'
import {
	SignInner,
	SignVideo,
	SignBlock,
	SignTabs,
	SignContent,
	SignTitle,
	SignForm,
	SignInput,
	SignBtn,
	SignOr,
} from './Authorization.styled'

export const Authorization: FC = () => {
	return (
		<section className="sign">
			<div className="container">
				<SignInner>
					<SignVideo>
						<video autoPlay loop src={video}></video>
					</SignVideo>

					<SignBlock>
						<SignTabs id="signTabs">
							<li className="tabs__item active" data-btn="1">
								Sign Up
							</li>
							<li className="tabs__item" data-btn="2">
								Sign In
							</li>
						</SignTabs>

						<SignContent>
							<div className="content__item active" data-content="1">
								<SignTitle className="h1">Get Started</SignTitle>

								<SignForm>
									<SignInput variant="sign" type="email" placeholder="Email" />
									<SignInput variant="sign" type="text" placeholder="Name" />
									<SignInput variant="sign" type="text" placeholder="Password" />

									<SignBtn type="submit">Sign Up</SignBtn>
								</SignForm>

								<SignOr>
									<span>Or using</span>
									<a href="" className="sign__icon">
										<img src={google} alt="google" />
									</a>
								</SignOr>
							</div>

							<div className="content__item" data-content="2">
								<h1 className="sign__title h1">Welcome Back</h1>

								<SignForm>
									<SignInput type="email" placeholder="Email" />
									<SignInput type="text" placeholder="Password" />

									<SignBtn type="submit">Sign In</SignBtn>
								</SignForm>

								<SignOr className="sign__or">
									<span>Or using</span>
									<a href="" className="sign__icon">
										<img src={google} alt="google" />
									</a>
								</SignOr>
							</div>
						</SignContent>
					</SignBlock>
				</SignInner>
			</div>
		</section>
	)
}
