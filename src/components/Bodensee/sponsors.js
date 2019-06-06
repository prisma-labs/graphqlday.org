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
	
	> section {
		margin-bottom: 48px;
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
	img {
		max-width: 375px;
	}
`;

export default () => (
  <StaticQuery
    query={graphql`
      fragment Data on GraphCMS_Sponsor {
		url
        logo {
          url
        }
      }

      {
        gcms {
          graphcms: sponsor(where: { id: "cjwkoabnzbfk70910uivr7vv5" }) {
            ...Data
          }
          appsync: sponsor(where: { id: "cjwko0z8kb1y10941qkjv5e2o" }) {
            ...Data
          }
          honeypot: sponsor(where: { id: "cjuvfq9gpe7uh0c15pf4zkzzw" }) {
            ...Data
          }
          prisma: sponsor(where: { id: "cjuvfqtbee8ga0c15nx7youyo" }) {
            ...Data
          }
        }
      }
    `}
    render={data => (
      <Section>
		<section>
	  	<h2>Organized by</h2>
		<img src={data.gcms.graphcms.logo.url} alt="GraphCMS logo" />
		</section>
		<section>
        <h2>Gold Sponsors</h2>
		<a href={data.gcms.appsync.url}><img src={data.gcms.appsync.logo.url} alt="AWS App-Sync logo" /></a>
		</section>
		<section>
        <h2>Community Sponsors</h2>
        <img
          src={data.gcms.honeypot.logo.url}
          alt="honeypot logo"
          className="padding"
        />
		<img src={data.gcms.prisma.logo.url} alt="prisma logo" />
		</section>
      </Section>
    )}
  />
)
