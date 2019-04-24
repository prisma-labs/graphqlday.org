import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Row, Column } from 'hedron';

const HeroRow = styled(Row)`
	margin: 0 auto;
	max-width: 1200px;
	padding-bottom: 64px;

	h1 {
		margin-top: 64px;
		margin-bottom: 16px;
		font-weight: 800;
		line-height: 1.4;
	}

	.subHeader {
		margin-bottom: 32px;
		line-height: 1.5;
		color: #757575;
	}

	.column {
		display: flex;
		justify-content: center;
	}

	.left {
		padding-right: 32px;
	}

	.detail {
		display: inline-block;
		margin-bottom: 32px;

		p {
			line-height: 1.4;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 0.5px;
			color: #db3f74;
			margin-bottom: 8px;
		}

		a {
			color: #eb95b2;
		}
	}

	button {
		padding: 16px 32px;
		border-radius: 5px;
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.5s;
		background: #db3f74;
		color: white;
		border: none;
		margin-right: 16px;
	}

	button:nth-last-child {
		margin-right: 0;
	}

	button:hover {
		box-shadow: 0 16px 32px 0 rgba(62, 57, 107, 0.18), 0 0 0 transparent;
		transform: translate(0px, -5px);
	}

	button:disabled {
		background: lightgray;
		cursor: default;

		:hover {
			transform: none;
			box-shadow: none;
		}
	}
`;

const HeroImg = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	img {
		border-radius: 5px;
		height: 350px;
		width: 350px;
	}

	.pink {
		order: 1;
		width: 60px;
		height: 250px;
		flex: 0 0 auto;
		background: url(https://media.graphcms.com/wqJU9NoQjGzhBAZj2Xwx);
		border-radius: 0 5px 5px 0;
	}
`;

const TorontoHero = () => (
	<section>
		<HeroRow>
			<Column lg={6} md={12} className="column">
				<div>
					<h1>Join us at GraphQL Day Toronto!</h1>
					<p className="subHeader">
						GraphQL Day Toronto is a single-day conference focusing on adopting
						GraphQL and getting the most out of it in production. Learn from a
						lineup of thought leaders and connect with other forward-thinking
						local developers and technical leaders.
					</p>
					<div className="detail left">
						<p>Date</p>
						<time>28th February, 2019</time>
					</div>
					<div className="detail">
						<p>Location</p>
						<a href="https://www.google.com/maps/place/25+York+Street/@43.6434445,-79.3809378,15z/data=!4m5!3m4!1s0x0:0x32684a124bd8acaf!8m2!3d43.6434445!4d-79.3809378?ved=2ahUKEwjJjbOMm5HgAhUCyYMKHSTvBG8Q_BIwCnoECAMQCA&shorturl=1">
							3rd Floor TELUS Digital, Toronto
						</a>
					</div>
					<div>
						<button disabled>Tickets &amp; Training</button>
						<Link to="/sponsors">
							<button>Become a Sponsor</button>
						</Link>
					</div>
				</div>
			</Column>
			<Column lg={6} md={12} className="column">
				<HeroImg>
					<img
						src="https://media.graphcms.com/6XiVYdPUTro1TboSC4BQ"
						alt="Toronto"
					/>
					<div className="pink" />
				</HeroImg>
			</Column>
		</HeroRow>
	</section>
);

export default TorontoHero;
