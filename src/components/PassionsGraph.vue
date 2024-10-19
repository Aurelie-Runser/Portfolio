<template>
  <div class="w-full max-w-md h-auto overflow-visible">
    <h3 class="px-7 md:px-10">Passions</h3>

    <Radar class="scale-90"
      id="my-chart-id"
      :options="options"
      :data="data"
    />
  </div>
</template>

<script>
import { Radar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement)

export default {
  name: 'RadarChart',
  components: { Radar },
  data() {
    return {
      data: {
        labels: [
          "Développement",
          "Café",
          "Animés",
          "Chemises",
          "Rock",
        ],

        datasets: [{
          data: [5, 4, 5, 2, 3],
          label: "Passions", 
          backgroundColor: 'rgba(34, 211, 238, 0.3)',
          borderColor: '#22d3ee',
          pointBackgroundColor: '#22d3ee',
          pointBorderColor: '#ffedd5',
          pointHoverBackgroundColor: '#ffedd5',
          pointHoverBorderColor: '#22d3ee',
          pointHoverRadius: "5",
          pointHoverBorderWidth: "2"
        }]
      },

      options: {
        responsive: true,

        scales: {
          r: {
            // echelle, nombre min et max
            stepSize: 1,
            suggestedMin: 0,
            suggestedMax: 6, 

            // traits "horizontaux"
            grid: {
              color: '#dddddd70'
            },
            
            // traits "verticaux"
            angleLines: {
              color: '#dddddd50' 
            },
            
            // nombre des niveaux
            ticks: {
              display: false,
            },

            // légende
            pointLabels: {
              color: '#ffedd5',
              font:{
                family: "Darker Grotesque",
                size: 22
              }
            }
          },
        }
      }
    }
  }
}
</script>