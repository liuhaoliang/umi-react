import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryUsers() {
  return request('/users');
}
