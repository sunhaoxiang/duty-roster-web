<template>
  <div>
    <Row>
      <Col span="16" offset="4">
        <Card shadow class="card">
          <p slot="title" class="align">值日表</p>
          <p class="align">本周值日：{{dutyPerson}}</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      startDate: '2017-12-11',
      nowDate: '',
      days: 0,
      flag: 0
    }
  },
  computed: {
    dutyPerson () {
      switch (this.flag % 3) {
        case 0:
          return '孙昊翔'
        case 1:
          return '张武林'
        case 2:
          return '陈志'
      }
    }
  },
  created () {
    this.nowDate = moment().format('YYYY-MM-DD')
    this.days = (moment(this.nowDate) - moment(this.startDate)) / (60 * 60 * 24 * 1000)
    this.flag = (Math.floor(this.days / 7))
  }
}
</script>

<style>
.card {
  margin: 200px 0;
}
.align {
  text-align: center;
}
</style>
