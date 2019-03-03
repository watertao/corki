import request from '@/utils/request';
import { get, post } from '../utils/rest-accessor';

/**
 * 获取当前会话的用户
 *
 * @returns {Promise<void>}
 */
export async function queryCurrent() {
  return get('/system/session', null, null);
}

/**
 *
 * @returns {Promise<*>}
 */
export async function login(loginData) {
  return post('/system/session', null, null, loginData);
}


export async function logout() {
  return delete('/system/session');
}

