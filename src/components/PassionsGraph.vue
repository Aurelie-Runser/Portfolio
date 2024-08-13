<template>
  <div class="w-full max-w-md h-auto overflow-visible">
    <h3 class="px-7 md:px-10">Passions</h3>

    <Radar class="scale-75"
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
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
      chartData: {
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
          borderColor: '#d946ef',
          pointBackgroundColor: '#d946ef',
          pointBorderColor: '#ffedd5',
          pointHoverBackgroundColor: '#ffedd5',
          pointHoverBorderColor: '#d946ef',
          pointHoverRadius: "5",
          pointHoverBorderWidth: "2"
        }]
      },

      chartOptions: {
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
                size: 26
              }
            }
          },
        }
      }
    }
  }
}
</script>