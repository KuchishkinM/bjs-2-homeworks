class AlarmClock {

  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  };

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы')
    }

    if (this.alarmCollection.find(time => time.time === time)) {
      console.warn('Уже присутствует звонок на это же время')
    } else {
      this.alarmCollection.push({
        time,
        callback,
        canCall: true
      })
    }
  };

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(t => t.time !== time)
  };

  getCurrentFormattedTime() {
    let now = new Date().toLocaleTimeString().slice(0, -3);
    return now;
  };

  start() {
    const nowTime = this.getCurrentFormattedTime()
    if (this.intervalId) {
      return
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(function (item) {
        if (item.time === nowTime && item.canCall) {
          item.canCall = false
          item.callback()
        }
      })
    }, 1000)
  }

  stop() {
    this.intervalId = null
  }

  resetAllCalls() {
    this.alarmCollection.forEach(function (item) {
      item.canCall = true
    })
  }

  clearAlarms() {
    this.stop()
    this.alarmCollection = []
  }
}
