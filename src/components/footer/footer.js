import React from 'react';
import logoIlFioccoDiNeve from '../../images/logo-il-fiocco-di-neve.jpg';
import logoPerseo from '../../images/logo-perseo.jpg';
import './footer.style.scss';

export const Footer = () => (
	<footer>
		<h2>Collaborano con noi:</h2>
		<div>
			<img src={logoPerseo} alt="Il logo dell'associazione Perseo" />
			<p>
				<strong>Associazione Perseo</strong> – Centro Antiviolenza Maschile –
				Milano
			</p>
		</div>
		<div>
			<img
				src={logoIlFioccoDiNeve}
				alt="Il logo dell'associazione Il fiocco di neve"
			/>
			<p>
				<strong>Il Fiocco di Neve</strong> - Centro Antiviolenza per le vittime
				maschili di violenza di genere in ogni sua forma - Gorizia
			</p>
		</div>
		<p>
			<strong>UNAVi</strong> – Unione Nazionale Associazione Vittime Italiane -
			associazione a difesa delle vittime di reati violenti - Pavia
		</p>
	</footer>
);
