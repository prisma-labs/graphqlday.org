import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'hedron';
import { StaticQuery, graphql } from 'gatsby';

import gh from '../../pages/static/github.png';
import tw from '../../pages/static/twitter.png';

const SpeakerSection = styled.section`
	max-width: 1140px;
	margin: 0 auto;
	margin-bottom: 64px;

	h2 {
		color: rgb(219, 63, 116);
		line-height: 1.1;
		font-weight: 600;
		font-size: 20px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin: 16px 0;
	}
`;

const SpeakerCard = styled.div`
	.headshot {
		background-image: url(${props => props.headshot});
		background-color: white;
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 5px;
		box-shadow: 0 16px 32px 0 rgba(62, 57, 107, 0.18), 0 0 0 transparent;
		margin-bottom: 16px;
		height: 350px;
		width: 350px;
	}

	.name {
		color: rgb(219, 63, 116);
		line-height: 1.1;
		font-weight: 600;
		font-size: 20px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		padding-bottom: 16px;
		display: inline-block;
	}

	.position {
		line-height: 1.3;
		color: rgb(170, 172, 170);
	}

	.label {
		display: flex;
		align-items: start;
		justify-content: space-between;
	}
	.text {
		display: inline-block;
	}

	.links {
		display: inline-block;
	}

	.link {
		margin-right: 8px;
		transition: all 0.3s;

		:hover {
			filter: brightness(50%);
		}
	}
`;

export default (props, data) => (
	<StaticQuery
		query={graphql`
			query {
				gcms {
					torontoSpeakers {
						headshot {
							url
						}
						name
						position
						githubLink
						twitterLink
					}
				}
			}
		`}
		render={data => (
			<SpeakerSection>
				<h2>Speakers</h2>
				<Row>
					{data.gcms.torontoSpeakers.map(speaker => (
						<Column lg={4} md={6} sm={12}>
							<SpeakerCard headshot={speaker.headshot.url}>
								<div
									background={speaker.headshot.url}
									alt="speaker's headshot"
									className="headshot"
								/>
								<div className="label">
									<p className="name">{speaker.name}</p>
									<div className="links">
										<a href={speaker.githubLink}>
											<img
												src={gh}
												alt="Github Profile link"
												className="link"
											/>
										</a>
										<a href={speaker.twitterLink}>
											<img
												src={tw}
												alt="Twitter Profile link"
												className="link"
											/>
										</a>
									</div>
								</div>
								<p className="position">{speaker.position}</p>
							</SpeakerCard>
						</Column>
					))}
					<Column lg={3} md={6} sm={12} className="column">
						<SpeakerCard>
							<div>
								<h3 className="question">Want to speak?</h3>
								<a
									href="https://www.papercall.io/graphql-day-bodensee"
									alt="Call for papers"
								>
									<button>Submit an Idea</button>
								</a>
							</div>
						</SpeakerCard>
					</Column>
				</Row>
			</SpeakerSection>
		)}
	/>
);
