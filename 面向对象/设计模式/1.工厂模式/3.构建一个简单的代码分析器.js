class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = null;
  }
  /**
   * 启动分析过程
   */
  start() {
    this.lastTime = process.hrtime();
  }
  /**
   * 结束分析过程,并将处理的时间输出到控制台
   */
  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(`Time "${this.label} took ${diff[0]} seconds and ${diff[1]} nanoseconds`);
  }
}

module.exports = (label) => {
  if (process.env.NODE_ENV === 'development') {
    return new Profiler(label);
  } else if (process.env.NODE_ENV === 'production') {
    return {
      start: () => {},
      end: () => {},
    };
  }
  throw new Error('Must set NODE_ENV');
};

