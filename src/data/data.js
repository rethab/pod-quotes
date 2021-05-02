export default () => {
    return {
        podcasts() {
            return [
                {
                    id: 1,
                    name: 'Acquired LP Show',
                    url: 'https://glow.fm/acquired/'
                },
                {
                    id: 2,
                    name: 'The Rational Reminder',
                    url: 'https://rationalreminder.libsyn.com/'
                },
            ]
        },
        episodes() {
            return [
                {
                    id: 1,
                    podcastId: 1,
                    date: '2020-05-05',
                    name: 'High-performance Hiring & Interviewing with former Amazon Worldwide GM of Prime Membership, Anna Collins',
                    url: 'https://www.acquired.fm/episodes/high-performance-hiring-interviewing-with-former-amazon-worldwide-gm-of-prime-membership-anna-collins'
                },
                {
                    id: 2,
                    podcastId: 2,
                    date: '2021-04-29',
                    name: 'Paul Merriman: We\'re Talking Millions',
                    url: 'https://rationalreminder.libsyn.com/paul-merriman-were-talking-millions-ep147'
                },
            ]
        },
        people() {
            return [
                {
                    id: 1,
                    name: 'Anna Collins',
                    linkedin: 'https://www.linkedin.com/in/anna-collins-5965/'
                },
                {
                    id: 2,
                    name: 'Warren Buffet',
                    twitter: 'https://twitter.com/WarrenBuffett'
                },
                {
                    id: 3,
                    name: 'Paul Merriman',
                    twitter: 'https://twitter.com/SavvyInvestorPM'
                },
            ]
        },
        quotes() {
            return [
                {
                    episodeId: 1,
                    quoteById: 1,
                    quote: 'If we did not win a game, I did not look at my individual stats',
                    time: '3:55',
                    context: 'playing basketball at harvard / team vs. individual',
                },
                {
                    episodeId: 1,
                    quoteById: 1,
                    quote: 'What people are on the bus? How do you bring the new people onto the bus? What seat on the bus? How do yo udevelop or move them from one seat to the next on the bus? When is the time for someone to get off the bus?',
                    time: '20:19',
                    context: 'the people process, of which interviewing is a part',
                },
                {
                    episodeId: 1,
                    quoteById: 1,
                    quote: 'When in doubt, throw them out',
                    time: '34:58',
                    context: 'deciding whether to hire a candidate',
                },
                {
                    episodeId: 1,
                    quoteById: 1,
                    quote: 'The faster I get my data, the faster I can go and sell. [..] I work to be connected and authtentic and also create a good candidate experience where I can',
                    time: '37:03',
                    context: 'whether she ever goes into sell mode during an interview',
                },
                {
                    episodeId: 1,
                    quoteById: 1,
                    quote: 'On a scale of zero to 100, what percent fit are you for this opportunity and why? What are the 3-5 factors?',
                    time: '41:55',
                    context: 'her first interview question. it tells here how much they know about the business / how prepared/enthousiastic they are',
                },
                {
                    episodeId: 1,
                    quoteById: 1,
                    quote: 'On a scale of one to ten, what level of interest do you have and why? Ten is you pay me money to have this job and one is I can pay the money',
                    time: '43:04',
                    context: 'second question in interviews',
                },
                {
                    episodeId: 2,
                    quoteById: 2,
                    quotedById: 3,
                    quote: 'You don\'t save what\'s left over after spending. You spend what\'s left over after saving.',
                    time: '52:55',
                    context: 'the most important habit is the one of saving. important commitment for young investors.',
                },
            ]
        }
    }
}
