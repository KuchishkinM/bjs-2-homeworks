class AlarmClock {

  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  };

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы')
    }

    if (this.alarmCollection.find(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время')
    }

    this.alarmCollection.push({
      time,
      callback,
      canCall: true
    })

  };

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(t => t.time !== time)
  };

  getCurrentFormattedTime() {
    let now = new Date().toLocaleTimeString().slice(0, -3);
    return now;
  };

  start() {
    if (this.intervalId) {
      return
    }

    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();

      this.alarmCollection.forEach(item => {
        if (item.time === currentTime && item.canCall) {
          item.canCall = false;
          item.callback();
        }
      });
    }, 1000);
  }

  stop() {
    this.intervalId = null
  }

  resetAllCalls() {
    this.alarmCollection.forEach(item => {
      item.canCall = true
    })
  }

  clearAlarms() {
    this.stop()
    this.alarmCollection = []
  }
}

// Все работает, если вернуться к первому варианту. Только имя аргумента колбека поменял. Не знаю, что еще нужно сделать(
const clock = new AlarmClock();
const callback = f => f;
clock.addClock("16:45", callback);
clock.addClock("16:45", callback);