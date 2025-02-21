import React from 'react'


const questions = [
    {
        id: 1,
        question: 'Website Development Services',
        answer: 'We specialize in building modern, responsive, and user-friendly websites tailored to your business needs. From corporate websites to e-commerce platforms, our solutions ensure seamless user experience.',
    },
    {
        id: 2,
        question: 'Website Maintenance & Support',
        answer: 'Keep your website running smoothly with our maintenance services. We provide security updates, performance optimization, bug fixes, and regular backups to ensure a hassle-free experience.',
    },
    {
        id: 3,
        question: 'SEO & Digital Marketing',
        answer: 'Enhance your online presence with our SEO and digital marketing strategies. We optimize your website for search engines, run targeted campaigns, and improve conversion rates to boost your business growth.',
    },
    {
        id: 4,
        question: 'Custom Web Applications',
        answer: 'Need a unique web solution? Our team develops custom web applications with the latest technologies to streamline your business processes and improve efficiency.',
    },
];


const Faq = () => {

    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    React.useEffect(() => {
        const results = questions.filter((item) =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div className="container">
            {/* text  */}
            <div className='row'>
                <div className="banner-content">
                    <h1 className='craft_heading'> Frequently <br /> Ask Questions</h1>
                </div>
            </div>
            <h2 className="heading">How can we help you?</h2>
            <Searchbar onSearchChange={(e) => setSearchTerm(e.target.value)} />
            <section className="faq">
                {searchResults.map((item) => (
                    <Question key={item.id} {...item} />
                ))}
            </section>
        </div>
    );
}

function Searchbar({ onSearchChange }) {
    return (
        <form>
            <svg viewBox="0 0 512 512" width="100" title="search">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
            <input
                className="searchbar"
                type="text"
                placeholder="Describe your issue"
                onChange={onSearchChange}
            />
        </form>
    );
}

function Question({ id, question, answer }) {
    const [isActive, setActive] = React.useState(false);

    return (
        <div className="question-wrapper">
            <div className="question">
                <h4 className='faq_que'>{question}</h4>
                <button onClick={() => setActive(!isActive)} className='faqbtn'>
                    <svg
                        className={isActive ? 'active' : ''}
                        viewBox="0 0 320 512"
                        width="100"
                        title="angle-down">
                        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                    </svg>
                </button>
            </div>
            <div className={isActive ? 'answer active' : 'answer'}>{answer}</div>
        </div>
    );
}


export default Faq
