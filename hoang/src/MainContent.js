	import React from 'react';
	import './MainContent.css';

	function MainContent() {
	const article = {
	title: 'The Beauty of Web Design',
	image: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/06/anh-itachi-2.jpg.webp', // URL hình ảnh mẫu
	content: `Itachi là một ninja thuộc gia tộc Uchiha, một trong những gia tộc mạnh nhất trong làng Lá (Konohagakure). Anh là con trai của Uchiha Fugaku và Uchiha Mikoto là anh trai của Uchiha Sasuke. Gia tộc Uchiha nổi tiếng với sức mạnh của Sharingan, một loại nhãn thuật đặc biệt. Anh được coi là một thiên tài từ khi còn nhỏ, tốt nghiệp học viện ninja với thành tích xuất sắc và trở thành chunin ở độ tuổi rất trẻ. Uchiha Itachi đã gia nhập Anbu – lực lượng ninja đặc nhiệm và trở thành đội trưởng khi còn rất trẻ.`,
	author: 'John Doe',
	date: 'October 8, 2024',
	};

	return (
	<main className="main-content">
	<div className="article">
	<h1>{article.title}</h1>
	<img src={article.image} alt="Web Design" />
	<p className="content">{article.content}</p>
	<div className="article-meta">
	<p>Written by: {article.author}</p>
	<p>Date: {article.date}</p>
	</div>
	</div>
	</main>
	);
	}

	export default MainContent;
