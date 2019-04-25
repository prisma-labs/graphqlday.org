import React from 'react';
import styled from 'styled-components';
// import { Row, Column } from 'hedron';
import { StaticQuery, graphql } from 'gatsby';

const Section = styled.section`
	text-align: center;
	padding-top: 32px;

	.padding {
		padding-right: 32px;
	}

	h2 {
		color: rgb(219, 63, 116);
		line-height: 1.1;
		font-weight: 600;
		font-size: 20px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin: 16px 0 32px 0;
	}
`;

export default () => (
	<StaticQuery
		query={graphql`
			query {
				gcms {
					okgrow: asset(where: { id: "cjuvcurbob3tt0c15e4sxj2jn" }) {
						url
					}
					github: asset(where: { id: "cjuvcur7vb3t90c15c3nduhpq" }) {
						url
					}
					shopify: asset(where: { id: "cjuvcus8db3v20c153i4g5499" }) {
						url
					}
					apollo: asset(where: { id: "cjuvcur7zb3tf0c15qcel7xt7" }) {
						url
					}
					honeypot: asset(where: { id: "cjuvcur7zb3tg0c15bl5dq9mh" }) {
						url
					}
					prisma: asset(where: { id: "cjuvcurffb3ty0c15g922kyah" }) {
						url
					}
				}
			}
		`}
		render={data => (
			<Section>
				<h2>Organized by</h2>
				<img src={data.gcms.okgrow.url} alt="OKgrow logo" />
				<h2>Silver Sponsors</h2>
				<img src={data.gcms.github.url} alt="github logo" className="padding" />
				<img src={data.gcms.shopify.url} alt="shopify logo" />
				<h2>Bronze Sponsors</h2>
				<img src={data.gcms.apollo.url} alt="apollo logo" />
				<h2>Community Sponsors</h2>
				<img
					src={data.gcms.honeypot.url}
					alt="honeypot logo"
					className="padding"
				/>
				<img src={data.gcms.prisma.url} alt="prisma logo" />
			</Section>
		)}
	/>
);
