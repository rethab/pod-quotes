<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          dense="true"
          :headers="headers"
          :items="quotes"
          :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Quotes',
  data() {
    return {
      search: '',
      headers: [
        {text: 'Date', value: 'date'},
        {text: 'Episode', value: 'episode'},
        {text: 'By', value: 'by'},
        {text: 'Time', value: 'time'},
        {text: 'Quote', value: 'quote'},
        {text: 'Context', value: 'context'},
      ],
      quotes: [
        {
          episode: 'High-performance Hiring & Interviewing with former Amazon Worldwide GM of Prime Membership, Anna Collins',
          date: '2020-05-05',
          by: 'Anna Collins',
          quote: 'If we did not win a game, I did not look at my individual stats',
          time: '3:55',
          context: 'playing basketball at harvard / team vs. individual',
        },
        {
          episode: 'High-performance Hiring & Interviewing with former Amazon Worldwide GM of Prime Membership, Anna Collins',
          date: '2020-05-05',
          by: 'Anna Collins',
          quote: 'What people are on the bus? How do you bring the new people onto the bus? What seat on the bus? How do yo udevelop or move them from one seat to the next on the bus? When is the time for someone to get off the bus?',
          time: '20:19',
          context: 'the people process, of which interviewing is a part',
        },
        {
          episode: 'High-performance Hiring & Interviewing with former Amazon Worldwide GM of Prime Membership, Anna Collins',
          date: '2020-05-05',
          by: 'Anna Collins',
          quote: 'When in doubt, throw them out',
          time: '34:58',
          context: 'deciding whether to hire a candidate',
        },
        {
          episode: 'High-performance Hiring & Interviewing with former Amazon Worldwide GM of Prime Membership, Anna Collins',
          date: '2020-05-05',
          by: 'Anna Collins',
          quote: 'The faster I get my data, the faster I can go and sell. [..] I work to be connected and authtentic and also create a good candidate experience where I can',
          time: '37:03',
          context: 'whether she ever goes into sell mode during an interview',
        },
        {
          episode: 'High-performance Hiring & Interviewing with former Amazon Worldwide GM of Prime Membership, Anna Collins',
          date: '2020-05-05',
          by: 'Anna Collins',
          quote: 'On a scale of zero to 100, what percent fit are you for this opportunity and why? What are the 3-5 factors?',
          time: '41:55',
          context: 'her first interview question. it tells here how much they know about the business / how prepared/enthousiastic they are',
        },
        {
          episode: 'High-performance Hiring & Interviewing with former Amazon Worldwide GM of Prime Membership, Anna Collins',
          date: '2020-05-05',
          by: 'Anna Collins',
          quote: 'On a scale of one to ten, what level of interest do you have and why? Ten is you pay me money to have this job and one is I can pay the money',
          time: '43:04',
          context: 'second question in interviews',
        },
      ],
    }
  },
}
</script>
