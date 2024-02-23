<template>
  <div class="content">
    <div class="container-fluid">
      <div class="social-demo">
        <div
          class="row social"
          v-for="item in socialNetworks"
          :class="'social-' + item.type"
          :key="item.type"
          v-if="item.inputs && item.inputs.length > 0"
        >
          <div class="col-md-12">
            <div class="sc-t" :class="'social-' + item.type + '--title'">
              {{ item.title }}
            </div>
            <div class="sc-i" :class="'social-' + item.type + '--input'">
              <div class="input-first">
                <label>{{ item.inputs[0].label }}</label>
                <input type="text" v-model="item.inputs[0].model" />
              </div>
              <div class="input-second">
                <label>{{ item.inputs[1].label }}</label>
                <input type="text" v-model="item.inputs[1].model" />
              </div>
              <div class="btn-social">
                <button
                  class="btn-clear"
                  :disabled="!item.canDelete"
                  @click="clearBtn(item.type)"
                >
                  Delete
                </button>
                <button
                  class="btn-save"
                  :disabled="!item.canSave"
                  @click="saveBtn(item.type)"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-chart text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Capacity</p>
              <h4 class="card-title">105GB</h4>
            </div>
            <div slot="footer"><i class="fa fa-refresh"></i>Updated now</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-light-3 text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Revenue</p>
              <h4 class="card-title">$1,345</h4>
            </div>
            <div slot="footer"><i class="fa fa-calendar-o"></i>Last day</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-vector text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category">Errors</p>
              <h4 class="card-title">23</h4>
            </div>
            <div slot="footer"><i class="fa fa-clock-o"></i>Last day</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-favourite-28 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Followers</p>
              <h4 class="card-title">+45</h4>
            </div>
            <div slot="footer"><i class="fa fa-refresh"></i>Updated now</div>
          </stats-card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <chart-card
            :chart-data="lineChart.data"
            :chart-options="lineChart.options"
            :responsive-options="lineChart.responsiveOptions"
          >
            <template slot="header">
              <h4 class="card-title">Users Behavior</h4>
              <p class="card-category">24 Hours performance</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Open
                <i class="fa fa-circle text-danger"></i> Click
                <i class="fa fa-circle text-warning"></i> Click Second Time
              </div>
              <hr />
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">Email Statistics</h4>
              <p class="card-category">Last Campaign Performance</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Open
                <i class="fa fa-circle text-danger"></i> Bounce
                <i class="fa fa-circle text-warning"></i> Unsubscribe
              </div>
              <hr />
              <div class="stats">
                <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
              </div>
            </template>
          </chart-card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <chart-card
            :chart-data="barChart.data"
            :chart-options="barChart.options"
            :chart-responsive-options="barChart.responsiveOptions"
            chart-type="Bar"
          >
            <template slot="header">
              <h4 class="card-title">2014 Sales</h4>
              <p class="card-category">All products including Taxes</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Tesla Model S
                <i class="fa fa-circle text-danger"></i> BMW 5 Series
              </div>
              <hr />
              <div class="stats">
                <i class="fa fa-check"></i> Data information certified
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-6">
          <card>
            <template slot="header">
              <h5 class="title">Tasks</h5>
              <p class="category">Backend development</p>
            </template>
            <l-table :data="tableData.data" :columns="tableData.columns">
              <template slot="columns"></template>

              <template slot-scope="{ row }">
                <td>
                  <base-checkbox v-model="row.checked"></base-checkbox>
                </td>
                <td>{{ row.title }}</td>
                <td class="td-actions text-right">
                  <button
                    type="button"
                    class="btn-simple btn btn-xs btn-info"
                    v-tooltip.top-center="editTooltip"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                  <button
                    type="button"
                    class="btn-simple btn btn-xs btn-danger"
                    v-tooltip.top-center="deleteTooltip"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                </td>
              </template>
            </l-table>
            <div class="footer">
              <hr />
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChartCard from "src/components/Cards/ChartCard.vue";
import StatsCard from "src/components/Cards/StatsCard.vue";
import LTable from "src/components/Table.vue";

export default {
  components: {
    LTable,
    ChartCard,
    StatsCard,
  },
  data() {
    return {
      socialNetworks: [
        {
          type: "google",
          title: "Google",
          inputs: [
            { label: "CustomerID", model: "", isValid: true },
            { label: "LoginCustomerID", model: "", isValid: true },
          ],
          canSave: true,
          canDelete: false,
        },
        {
          type: "meta",
          title: "Meta",
          inputs: [
            { label: "Pixel", model: "", isValid: true },
            { label: "Access token", model: "", isValid: true },
          ],
          canSave: true,
          canDelete: false,
        },
      ],
      editTooltip: "Edit Task",
      deleteTooltip: "Remove",
      pieChart: {
        data: {
          labels: ["40%", "20%", "40%"],
          series: [40, 20, 40],
        },
      },
      lineChart: {
        data: {
          labels: [
            "9:00AM",
            "12:00AM",
            "3:00PM",
            "6:00PM",
            "9:00PM",
            "12:00PM",
            "3:00AM",
            "6:00AM",
          ],
          series: [
            [287, 385, 490, 492, 554, 586, 698, 695],
            [67, 152, 143, 240, 287, 335, 435, 437],
            [23, 113, 67, 108, 190, 239, 307, 308],
          ],
        },
        options: {
          low: 0,
          high: 800,
          showArea: false,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
            right: 50,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              axisX: {
                labelInterpolationFnc(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      barChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
          ],
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false,
          },
          height: "245px",
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      tableData: {
        data: [
          {
            title:
              'Sign contract for "What are conference organizers afraid of?"',
            checked: false,
          },
          {
            title:
              "Lines From Great Russian Literature? Or E-mails From My Boss?",
            checked: true,
          },
          {
            title:
              "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
            checked: true,
          },
          {
            title: "Create 4 Invisible User Experiences you Never Knew About",
            checked: false,
          },
          { title: 'Read "Following makes Medium better"', checked: false },
          { title: "Unfollow 5 enemies from twitter", checked: false },
        ],
      },
    };
  },
  methods: {
    addMetaPixel() {
      const pixelId = "1109261980092754";
      const scriptText = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `;
      // Tạo thẻ script và chèn vào head của trang
      const scriptEl = document.createElement("script");
      scriptEl.textContent = scriptText;
      document.head.appendChild(scriptEl);
    },
    clearBtn(type) {
      const network = this.socialNetworks.find((n) => n.type === type);
      if (network) {
        network.inputs.forEach((input) => {
          input.model = "";
        });
        localStorage.removeItem(type);
        network.canSave = true;
        network.canDelete = false;
        console.log("Delete success");
      }
    },
    saveBtn(type) {
      const network = this.socialNetworks.find((n) => n.type === type);
      if (network) {
        let isValid = true;
        const dataToSave = {};
        network.inputs.forEach((input) => {
          if (!input.model.trim()) {
            isValid = false;
            input.isValid = false;
          } else {
            dataToSave[input.label] = input.model;
          }
        });
        if (isValid) {
          localStorage.setItem(type, JSON.stringify(dataToSave));
          network.canSave = false;
          network.canDelete = true;
          console.log("Save success");
        } else {
          console.log("Save Fail");
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  .container-fluid {
    .social-demo {
      padding: 0 15px;
      .social {
        margin-bottom: 20px;
        background: #ffffff;
        padding: 20px 0;
        border: 1px solid #8080804f;
        border-radius: 8px;
        .sc-t {
          font-size: 22px;
        }
        .sc-i {
          label {
            width: 120px;
            font-size: 14px;
            color: #a9a9a9;
          }
          input {
            font-size: 14px;
            color: #a9a9a9;
          }
          .btn-social {
            button {
              font-size: 14px;
              border: none;
              outline: none;
              padding: 8px 15px;
              border-radius: 8px;
              margin: 10px 5px 10px 0;
              color: #ffffff;
            }
            .btn-clear {
              background: #f50d0dcf;
            }
            .btn-save {
              background: #0000ffbf;
            }
          }
        }
      }
    }
  }
}
</style>
