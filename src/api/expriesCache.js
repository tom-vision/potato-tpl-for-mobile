class ItemCache {
  construct(data, timeout) {
    this.data = data;
    this.timeout = timeout;
    // 缓存创建时间
    this.cacheTime = new Date().getTime();
  }
}

class ExpriesCache {
  // 缓存池
  static cacheMap = new Map();

  static isOverTime(name) {
    const data = ExpriesCache.cacheMap.get(name);

    if (!data) return true;

    const curTime = new Date().getTime();
    const overTime = (curTime - data.cacheTime) / 1000;

    if (Math.abs(overTime) > data.timeout) {
      ExpriesCache.cacheMap.delete(name);
      return true;
    }
    return false;
  }

  static has(name) {
    return !ExpriesCache.isOverTime(name);
  }

  static delete(name) {
    ExpriesCache.cacheMap.delete(name);
  }

  static get(name) {
    const isOverTime = ExpriesCache.isOverTime(name);
    return isOverTime ? null : ExpriesCache.cacheMap.get(name).data;
  }

  // 缓存默认5分钟
  static set(name, data, timeout = 300) {
    const itemCache = new ItemCache(data, timeout);
    ExpriesCache.cacheMap.set(name, itemCache);
  }
}

export default ExpriesCache;
