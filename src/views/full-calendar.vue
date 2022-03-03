<template>
  <container>
    <div class="row">
      <div class="calendar-wrap">
        <div class="month-calendar">
          <FullCalendar :options="calendarOptions" />
        </div>
        <div class="date-wrap">
          <div class="top">
            {{ $moment(dateString).format('YYYY년 MM월 DD일') }}
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/ko';

export default {
  name: 'full-calendar',
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      dateString: new Date(),
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        locale: esLocale,
        height: 'auto',
        initialView: 'dayGridMonth',
        dayMaxEventRows: true,
        events: [
          { title: 'event 1', date: '2022-02-17' },
          { title: 'event 2', start: '2022-02-17', end: '2022-02-18' },
          { title: 'event 3', date: '2022-02-17' },
          { title: 'event 4', date: '2022-02-17' },
          { title: 'event 5', date: '2022-02-17' },
          { title: 'event 6', date: '2022-02-17' },
          { title: '발렌타인 데이', date: '2022-02-14' },
        ],
        headerToolbar: {
          start: 'prev,next', // will normally be on the left. if RTL, will be on the right
          center: 'title',
          end: 'today', // will normally be on the right. if RTL, will be on the left
        },
        dateClick: this.handleDateClick,
      },
    };
  },
  methods: {
    handleDateClick: function (arg) {
      this.dateString = arg.dateStr;
      console.log(arg.dateStr);
      //alert('date click! ' + arg.dateStr);
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  width: 1280px;
  margin: 0 auto;
  padding: 0 40px 40px;
  box-sizing: border-box;
  .calendar-wrap {
    display: flex;
    border-top: 1px solid #eee;
    //캘린더 영역
    .month-calendar {
      flex: 1 1 auto;
      border-right: 1px solid #eee;
      ::v-deep .fc-theme-standard th,
      ::v-deep .fc-theme-standard td {
        text-align: left;
        border: solid #eee !important;
        border-width: 1px 0 0 0 !important;
        font-size: 14px;
        line-height: 20px;
      }
      ::v-deep .fc-theme-standard td {
        height: 128px;
        .fc-daygrid-day-frame {
          padding: 10px;
        }
      }
      ::v-deep .fc {
        .fc-scrollgrid {
          border: none !important;
        }
        .fc-toolbar {
          padding: 9px 10px 9px 0;
          margin-bottom: 0;
          .fc-toolbar-title {
            font-size: 20px;
            line-height: 28px;
          }
        }
        .fc-button-primary {
          padding: 5px;
          background: #fff;
          border: 1px solid #eee;
          line-height: 1;
          .fc-icon {
            font-size: 20px;
            &::before {
              color: #333;
            }
          }
        }
        .fc-toolbar-chunk {
          .fc-today-button {
            height: 32px;
            padding: 5px 15px;
            font-size: 14px;
            font-weight: bold;
            color: #000;
            opacity: 1;
          }
        }
        .fc-scrollgrid-liquid {
          border: none !important;
        }
        .fc-col-header th {
          padding: 10px;
          &:first-child {
            a {
              color: red;
            }
          }
          &:last-child {
            a {
              color: blue;
            }
          }
        }
        .fc-daygrid-day-top {
          flex-direction: row;
          .fc-daygrid-day-number {
            font-size: 14px;
          }
        }
        .fc-day-today {
          .fc-daygrid-day-frame {
            background: #f7f7f7;
          }
        }
        .fc-scrollgrid-sync-table tbody tr td {
          &:first-child {
            .fc-daygrid-day-top {
              a {
                color: red;
              }
            }
          }
          &:last-child {
            .fc-daygrid-day-top {
              a {
                color: blue;
              }
            }
          }
        }
      }
    }
    .date-wrap {
      flex: 0 0 263px;
      .top {
        padding: 13px 20px;
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        border-bottom: 1px solid #eee;
      }
    }
  }
}
</style>
