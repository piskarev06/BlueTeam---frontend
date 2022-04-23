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
	SignOr,
} from './Authorization.styled'
import { Register } from '../../components/Form/RegisterForm/Register'
import { Login } from '../../components/Form/LoginForm/Login'

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

								<Register />

								<SignOr>
									<span>Or using</span>
									<a href="" className="sign__icon">
										<img src={google} alt="google" />
									</a>
								</SignOr>
							</div>

							<div className="content__item" data-content="2">
								<h1 className="sign__title h1">Welcome Back</h1>

								<Login />

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
