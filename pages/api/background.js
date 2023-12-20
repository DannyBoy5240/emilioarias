const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'BS, Illinois Institute of Technology',
                degree: 'United States',
                detail: 
                    "Bachelor of Applied Science (BASc)\n\n" + 
                    "During the four-year college course, I focused on learning the web programming language including Frontend and Backend, and in the process completed the bachelor's thesis 'Improving website speed and a problem in network security' and won a bachelor's degree.",
                year: ''
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Upwork',
                role: 'JavaScript | Python Full Stack Developer',
                url: 'https://neuralwave.tech/',
                desc: 
                    "- Developed and maintained full-stack applications, utilizing modern technologies and frameworks to deliver robust and user-friendly solutions.\n" + 
                    "- Collaborated with cross-functional teams to gather requirements, design system architecture, and implement scalable and efficient solutions.\n" + 
                    "- Integrated third-party APIs and services, ensuring seamless data flow and enhancing the functionality of web applications.\n" + 
                    "- Conducted code reviews, implemented best practices, and mentored junior developers to improve code quality and foster a collaborative development environment.\n",
                year: '10/2023 – Present',
                location: 'Atlanta, USA'
            },
            {
                id: 2,
                title: 'LearnWithSocrates',
                role: 'Senior Full Stack Develope',
                url: '/',
                desc: 
                    "- Created a search system for finding branches and ATMs filtered by various criteria, including a nearby feature.\n" + 
                    "- Wrote unit tests and integration tests using JUnit and Cucumber.\n" + 
                    "- Implemented performance optimizations by introducing lat/long caching on top of a Geo Time Zone API.\n" + 
                    "- Ensured that all of the REST APIs adhered to JSON API standards.\n" + 
                    "- Implemented the front end using React and developed components from scratch.\n",
                year: '10/2021 – 10/2023',
                location: 'Vancouver, USA'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
