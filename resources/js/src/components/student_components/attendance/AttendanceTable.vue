<template>
    <tr class="container mx-auto">
    
          
            <td class="border px-4 py-2">{{ date }}</td>
            <td class="border px-4 py-2">{{ entryHour }}</td>
            <td class="border px-4 py-2">{{ finishingHour }}</td>
            <td class="border px-4 py-2">{{ observation }}</td>
          
       
    </tr>
  </template>
  
  <script>
  export default {
    name: 'AttendanceTable',
    props: {
       date: String,
        entryHour: String,
        finishingHour: String,
        observation: String,
        isGrayRow:Boolean
        
    },
    data() {
      return {
       /* attendances: [
          { date: '2023-04-01', entryHour: '08:00', finishingHour: '17:00', observation: 'On time' },
          { date: '2023-04-02', entryHour: '08:30', finishingHour: '17:30', observation: 'Late' },
          { date: '2023-04-03', entryHour: '08:15', finishingHour: '17:15', observation: '' },
          { date: '2023-04-04', entryHour: '08:00', finishingHour: '17:00', observation: '' },
          { date: '2023-04-05', entryHour: '08:00', finishingHour: '17:00', observation: '' }
        ]*/
        
        grayRow: false
      }
    },
    methods: {
      turnGray(){
        this.grayRow = !this.grayRow
        
      }
  },
    created(){
     
    }, computed() {
      this.turnGray()
    }
  }
  </script>
  
  <style scoped>
  table {
    color: #3A96B4;
  }
  </style>
  