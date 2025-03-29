import { DataItem } from '../types';
import labelData from '../../static/test/relabel.json';
import { message } from 'antd';

const API_PORT = import.meta.env.VITE_API_PORT || 52003;
const API_BASE_URL = `http://localhost:${API_PORT}/api`;

export const saveLabel = async (index: number, types: string[]): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/labels/${index}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ types }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error saving label:', error);
    message.info('Please make sure the server is running. Use `node MannualAnnotate.js` to start the server.');
    return false;
  }
};

export const getData = async (): Promise<DataItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/labels`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching label data:', error);
    message.info('Please make sure the server is running. Use `node MannualAnnotate.js` to start the server.');
    return labelData;
  }
};