import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { RiGithubLine, RiLink } from "react-icons/ri";
import { motion } from "framer-motion";

const Portfolio = (props) => {
	const {
		projects
	} = props;
	const [items, setItems] = useState(projects);
	const [activeFilter, setActiveFilter] = useState(0);
	const filterItems = (categoryItem) => {
		const updatedItems = projects.filter((curElem) => {
			return curElem.category.includes(categoryItem);
		});

		setItems(updatedItems);
	};

	useEffect(() => {
		setItems(projects);
	}, [projects])

	return (
		<section className="portfolio container section" id="portfolio">
			<h2 className="section__title">Recent Projects</h2>

			<div className="portfolio__filters">
				<span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { setItems(projects); setActiveFilter(0) }}>
					All
				</span>
				<span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("React JS"); setActiveFilter(1) }}>
					Frontend
				</span>
				<span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Python"); setActiveFilter(2) }}>
					Backend
				</span>
				<span className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Python"); setActiveFilter(3) }}>
					Python
				</span>
				<span className={activeFilter === 4 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("React JS"); setActiveFilter(4) }}>
					React
				</span>
			</div>

			<div className="portfolio__container grid">
				{items.map((elem) => {
					const { id, image, title, category, url, repositoryUrl } = elem;

					return (
						<motion.div
							layout
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="portfolio__card"
							key={id}>
							<div className="portfolio__thumbnail">
								<img src={image} alt="" className="portfolio__img" height="267" />
								<div className="portfolio__mask"></div>
							</div>

							<span className="portfolio__category">{category.join(', ')}</span>
							<h3 className="portfolio__title">{title}</h3>
							<a href={url} target="_blank" rel="noreferrer" className="portfolio__button">
								<RiLink className="portfolio__button-icon" />
							</a>
							<a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button">
								<RiGithubLine className="portfolio__button-icon" />
							</a>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
