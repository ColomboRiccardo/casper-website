import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import './whoAreWe.style.scss';
import casperSecondImage from '../../images/casper-second-image.jpg';

export default function WhoAreWe() {
	//* Static queries are for components
	const data = useStaticQuery(graphql`
		query whoAreWeImages {
			firstImage: file(relativePath: { eq: "images/casper-second-image.jpg" }) {
				relativePath
			}
			secondImage: file(
				relativePath: { eq: "images/casper-second-image.jpg" }
			) {
				id
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED)
				}
			}
		}
	`);
	console.log(data);
	return (
		<section className='who-are-we'>
			<div className='who-are-we-section'>
				<StaticImage
					placeholder='dominantColor'
					layout='constrained'
					src='../../images/casper-image.jpg'
					className='who-are-we-image'
					alt=''
				/>

				<div>
					<h2>Perchè casper?</h2>
					<p>
						Questo acronimo è anche il nome di un piccolo fantasma, che con la
						sua dolcezza, ma anche con la sua determinazione è riuscito a
						sconfiggere i fantasmi cattivi che lo deridevano, che lo mettevano
						sempre in un angolo, lo emarginavano. CAsPer con il suo cuore di
						bambino è riuscito a squarciare il velo di indifferenza, di
						cattiveria, di violenza che ci sta soffocando.
					</p>
				</div>
			</div>
			<div className='who-are-we-section'>
				<StaticImage
					placeholder='dominantColor'
					layout='constrained'
					src='../../images/casper-second-image.jpg'
					className='who-are-we-image'
					alt=''
				/>

				<div>
					<h2>Chi siamo</h2>
					<p>
						CAsPer nasce e si costituisce nel 2013 ma, alla luce dei fatti che
						accadono nella nostra società solo ora ha deciso di agire,
						prefiggendosi di collaborare in sinergia con le istituzioni ed i
						Centri Antiviolenza presenti sul territorio. CAsPer si rivolge a
						uomini e donne che vivono sul territorio e subiscono violenza e/o
						maltrattamenti intra ed extra familiari. CAsPer mira a creare
						migliori condizioni di vita e di benessere alle persone senza
						distinzione di sesso, orientamento religioso, etnia , insomma sulle
						persone, interviene nell’ambito familiare, scolastico ( bullismo),
						sulla violenza tra coetanei, violenza assistita, fisica, psicologica
						e così via.
					</p>
				</div>
			</div>
		</section>
	);
}
