export const Storage = {
  get(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};
//check why we add get, set and remove in localstorage

// Keys for organized access (avoid typos)
export const STORAGE_KEYS = {
  FORM_DATA: 'formData',
  DESIGN_DATA: 'designData',
  CARD_DATA: 'cardData'
};

//design js, we need to change the names of the themes
import { Storage, STORAGE_KEYS } from './0_localstorage.js';

export const initDesign = () => {
  // Load saved data (or defaults)
  const savedData = Storage.get(STORAGE_KEYS.DESIGN_DATA) || { theme: 'light' };

  // Apply saved theme
  document.body.classList.add(savedData.theme);

  // Save on changes
  document.querySelector('.theme-toggle').addEventListener('click', () => {
    const newTheme = savedData.theme === 'light' ? 'dark' : 'light';
    Storage.set(STORAGE_KEYS.DESIGN_DATA, { theme: newTheme });
  });
};

//form.js. we need to add a line for fields population per item same for save for input section

import { Storage, STORAGE_KEYS } from './0_localstorage.js';

export const initForm = () => {
  const savedData = Storage.get(STORAGE_KEYS.FORM_DATA) || { name: '', email: '' };

  // Populate form fields
  document.querySelector('#name').value = savedData.name;

  // Save on input
  document.querySelector('#name').addEventListener('input', (e) => {
    Storage.set(STORAGE_KEYS.FORM_DATA, { ...savedData, name: e.target.value });
  });
};