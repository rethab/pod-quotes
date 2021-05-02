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
                {
                    id: 3,
                    podcastId: 1,
                    date: '2020-09-29',
                    name: 'How YC Rewrote the Seed Playbook with Garry Tan',
                    url: 'https://www.acquired.fm/episodes/how-yc-rewrote-the-seed-playbook-with-garry-tan'
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
                {
                    id: 4,
                    name: 'Garry Tan',
                    twitter: 'https://twitter.com/garrytan'
                },
                {
                    id: 5,
                    name: 'Matt Cohler',
                    twitter: 'https://twitter.com/mattcohler'
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
                {
                    episodeId: 3,
                    quoteById: 4,
                    quote: '"Who can I get?" is the wrong question. You should start with "Who is the smartest person I know?"',
                    time: '8:26',
                    context: 'how to hire the best people',
                },
                {
                    episodeId: 3,
                    quoteById: 4,
                    quote: 'Anytime there\'s a very strong reaction to something, there is something there',
                    time: '14:56',
                    context: 'how he realized there\'s something going on with YC. people around him talked very negatively about them',
                },
                {
                    episodeId: 3,
                    quoteById: 4,
                    quote: 'Why startups fail: It\'s not one thing, it\'s actually five different things and all come together and they become intractable and the plane crashes and kills everyone.',
                    time: '23:25',
                    context: 'startups fail like planes',
                },
                {
                    episodeId: 3,
                    quoteById: 4,
                    quote: 'It would have been just money, but what we got out of YC was actually the network',
                    time: '24:23',
                    context: 'how (being stanford graduates) they could have raised money without YC',
                },
                {
                    episodeId: 3,
                    quoteById: 4,
                    quote: 'The interesting thing that is happening is not being written about yet. You\'ll find out about it in like two or three years if you\'re lucky.',
                    time: '30:30',
                    context: 'how to find stuff before other people are onto it',
                },
                {
                    episodeId: 3,
                    quoteById: 4,
                    quote: 'Don\'t tell me there aren\'t enough smart people. If anything the people are trapped in these systems - basically machines that don\'t allow them to fully realize their potential.',
                    time: '45:10',
                },
                {
                    episodeId: 3,
                    quoteById: 4,
                    quote: 'It\'s not that things that are hot can\'t be good. It\'s that, if it\'s hot it\'s not necessarily good',
                    time: '51:17',
                    context: 'hotness is not an indicator for whether to put money into something',
                },
                {
                    episodeId: 3,
                    quoteById: 5,
                    quotedById: 4,
                    quote: 'Venture capital is not about seeing the future, it\'s about seeing the present very clearly.',
                    time: '52:55',
                },
                {
                    episodeId: 3,
                    quoteById: 4,
                    quote: 'Really good engineers are gonna go and remake all of the planet.',
                    time: '1:09:16',
                    context: 'he\'s very long on software',
                },
            ]
        }
    }
}
