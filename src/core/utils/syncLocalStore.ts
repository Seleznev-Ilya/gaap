export enum StorageKeys {
  bodyPartCurrent = "BODY_PART_CURRENT",
  bodyPartHistory = "BODY_PART_HISTORY",
}

const syncLocalStore = (key: string | StorageKeys) => {
  const getStore = () => {
    const state = localStorage.getItem(key);
    if (state !== null) {
      return JSON.parse(state);
    }
    return null;
  };
  const setStore = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const clearStore = (key: StorageKeys) => {
    localStorage.removeItem(key);
  };

  return { store: getStore(), setStore, clearStore };
};

export default syncLocalStore;
