<template>
  <div class="w-full max-w-md h-auto overflow-visible">
    <h3 class="px-7 md:px-10">Soft Skills</h3>

    <Radar
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
          "Esprit d'apprentissage",
          "Minutieuse",
          "Esprit d'équipe",
          "Persévérance",
          "Autonomie",
        ],

        datasets: [{
          data: [4, 6, 4, 5, 4],
          label: "Soft Skills", 
          borderColor: '#22d3ee',
          pointBackgroundColor: '#22d3ee',
          pointBorderColor: '#ffedd5',
          pointHoverBackgroundColor: '#ffedd5',
          pointHoverBorderColor: '#22d3ee',
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
                size: 20
              }
            }
          },
        }
      }
    }
  }
}
</script>