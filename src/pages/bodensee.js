import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Row, Column } from 'hedron';
import { Link } from 'gatsby';

import Speakers from '../components/Bodensee/speakers';
import Schedule from '../components/Bodensee/schedule';

import bodensee from './static/bodensee.png';

const BG = styled.div`
	background: linear-gradient(
		180deg,
		rgba(245, 97, 153, 0) 0%,
		rgba(245, 97, 153, 0.15) 100%
	);
`;

const Hero = styled.section`
	padding: 64px 32px;

	.row {
		max-width: 1200px;
		margin: 0 auto;
	}

	.column {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h1 {
		margin-bottom: 32px;
	}

	.subheader {
		font-size: 1em;
		line-height: 2;
		color: #656565;
		margin-bottom: 32px;
	}

	.bodensee {
		max-height: 400px;
	}

	button {
		padding: 16px 32px;
		border-radius: 5px;
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.5s;
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

	.dark {
		background: #db3f74;
		color: white;
		border: none;
		margin-right: 16px;

		@media (max-width: 435px) {
			margin-right: 0;
			margin-bottom: 16px;
		}
	}

	.light {
		background: white;
		color: #db3f74;
		border: 2px solid #db3f74;
	}
`;

const BodenseePage = () => (
	<Layout>
		<BG>
			<Hero>
				<Row className="row">
					<Column lg={6} sm={12} className="column">
						<div>
							<h1>Join us at GraphQL Day Bodensee!</h1>
							<p className="subheader">
								GraphQL Day Bodensee is a single-day conference focusing on
								adopting GraphQL and getting the most out of it in production.
								Learn from a lineup of thought leaders and connect with other
								forward-thinking local developers and technical leaders.
							</p>
							<div className="buttons">
								<a
									href="https://www.eventbrite.ie/e/graphql-day-bodensee-tickets-60886463050"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="dark">Get tickets</button>
								</a>
								<Link
									to="/sponsors"
									alt="More information about sponsoring GraphQL day Bodensee"
								>
									<button className="light">Become a Sponsor</button>
								</Link>
							</div>
						</div>
					</Column>
					<Column lg={6} sm={12} className="column">
						<img
							src={bodensee}
							alt="hero graphic of bodensee germany"
							className="bodensee"
						/>
					</Column>
				</Row>
			</Hero>
		</BG>
		<Speakers />
		<Schedule />
	</Layout>
);

export default BodenseePage;
